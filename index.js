const express = require("express");
const app = express();
app.listen(8080, () => console.log("Server Started!"));
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate=require('ejs-mate');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);


const mongooseURL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(mongooseURL);
}
main()
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log(err));

//Index route
app.get("/listings", async (req, res) => {
  let listings = await Listing.find({});
  res.render("./listings/index.ejs", { listings });
});

//New route
app.get("/listings/new", (req, res) => {
  res.render("./listings/newlisting.ejs");
});

//Show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("./listings/show.ejs", { listing });
});

//Create route
app.post("/listings", async (req, res) => {
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
});

//Edit route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("./listings/edit.ejs", { listing });
});

app.put("/listings/:id",async (req,res)=>{
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
})


//delete route
app.delete("/listings/:id",async (req,res)=>{
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect('/listings')
})
