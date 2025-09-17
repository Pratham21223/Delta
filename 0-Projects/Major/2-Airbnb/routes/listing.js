const express = require("express");
const router = express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const expressErr=require("../utils/expressErr.js");
const {listingSchema} = require("../schema.js")
const Listing = require("../models/listing.js");
const session = require('express-session');
const flash = require('connect-flash')

const validateListing=(req,res,next)=>{
  let {error}=listingSchema.validate(req.body);
  if(error) {
    let errMsg=error.details.map((el)=>el.message).join(", ")
    throw new expressErr(400,error)
  }
  else next();
}
//Index route
router.get("/",wrapAsync(async (req, res) => {
  let listings = await Listing.find({});
  res.render("./listings/index.ejs", { listings });
}));

//New route
router.get("/new", (req, res) => {
  res.render("./listings/newlisting.ejs");
});

//Show route
router.get("/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  if(!listing) {
    req.flash("error","Listing doesn't exist")
    res.redirect("/listings")
  }
  res.render("./listings/show.ejs", { listing });
}));

//Create route
router.post("/",wrapAsync(async (req, res) => {
  let { title, description, image, price, location, country } = req.body;
  let newlisting = new Listing({
    title: title,
    description: description,
    image: { url: image },
    price: price,
    location: location,
    country: country,
  });
  await newlisting.save();
  req.flash("success","New Listing Created!")
  res.redirect("/listings");
}));

//Edit route
router.get("/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("./listings/edit.ejs", { listing });
}));

router.put("/:id",wrapAsync(async (req,res)=>{
  let { id } = req.params;
  let { title, description, image, price, location, country } = req.body;
  let updatedListing ={
    title: title,
    description: description,
    image: { url: image },
    price: price,
    location: location,
    country: country,
  };
  await Listing.findByIdAndUpdate(id,updatedListing);
    req.flash("success","Listing Updated!")
  res.redirect(`/listings/${id}`);
}));


//delete route
router.delete("/:id",wrapAsync(async (req,res)=>{
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!")
  res.redirect('/listings')
}));

module.exports = router;