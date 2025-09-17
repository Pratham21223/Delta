const express = require("express");
const app = express();
app.listen(8080, () => console.log("Server Started!"));
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate=require('ejs-mate');
const expressErr=require("./utils/expressErr.js");
const session = require('express-session');
const flash = require('connect-flash')
//Router
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");


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

//Session options
const sessionOptions = {
  secret:"SecretCode",
  resave : false,
  saveUninitialized :true,
  cookie : {
    expires:Date.now() + 7*24*60*60*1000,
    maxAge: 7*24*60*60*1000,
    httpOnly:true
  }
}
app.use(session(sessionOptions));
app.use(flash());
app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
})

//Listings
app.use("/listings",listings)


//Reviews
app.use("/listings/:id/reviews/",reviews)


//Error handling
app.use((req,res,next)=>{
  next(new expressErr(404,"Sorry, Page Not Found!"))
})
app.use((err,req,res,next)=>{
  let {status=500,message="Something went wrong!"}=err;
  res.status(status).render("err.ejs",{message})
})
