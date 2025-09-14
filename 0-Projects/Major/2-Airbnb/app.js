const express = require("express");
const app = express();
app.listen(8080, () => console.log("Server Started!"));
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate=require('ejs-mate');
const wrapAsync=require("./utils/wrapAsync.js");
const expressErr=require("./utils/expressErr.js");
const {listingSchema} = require("./schema.js")
const Review = require("./models/review.js");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);

const validateListing=(req,res,next)=>{
  let {error}=listingSchema.validate(req.body);
  if(error) {
    let errMsg=error.details.map((el)=>el.message).join(", ")
    throw new expressErr(400,error)
  }
  else next();
}

const mongooseURL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(mongooseURL);
}
main()
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log(err));

//Index route
app.get("/listings",wrapAsync(async (req, res) => {
  let listings = await Listing.find({});
  res.render("./listings/index.ejs", { listings });
}));

//New route
app.get("/listings/new", (req, res) => {
  res.render("./listings/newlisting.ejs");
});

//Show route
app.get("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  res.render("./listings/show.ejs", { listing });
}));

//Create route
app.post("/listings",wrapAsync(async (req, res) => {
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
  res.redirect("/listings");
}));

//Edit route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("./listings/edit.ejs", { listing });
}));

app.put("/listings/:id",wrapAsync(async (req,res)=>{
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
  res.redirect(`/listings/${id}`);
}));


//delete route
app.delete("/listings/:id",wrapAsync(async (req,res)=>{
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect('/listings')
}));

//Reviews

//Post review
app.post("/listings/:id/reviews",async(req,res,next)=>{
  let { id } = req.params;
  let listing = await Listing.findById(id);
  let {rating,comment}=req.body;
  let newReview = new Review({rating:rating,comment:comment});

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  res.redirect(`/listings/${id}`)
})

//Delete Review
app.delete("/listings/:id/reviews/:reviewId",wrapAsync(async (req,res)=>{
  let {id,reviewId}=req.params;
  await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/listings/${id}`);
}))

app.use((req,res,next)=>{
  next(new expressErr(404,"Sorry, Page Not Found!"))
})
app.use((err,req,res,next)=>{
  let {status=500,message="Something went wrong!"}=err;
  res.status(status).render("err.ejs",{message})
})
