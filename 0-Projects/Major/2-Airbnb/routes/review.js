const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync=require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const session = require('express-session');
const flash = require('connect-flash')


//Post review
router.post("/",async(req,res,next)=>{
  let { id } = req.params;
  console.log(id);
  let listing = await Listing.findById(id);
  let {rating,comment}=req.body;
  let newReview = new Review({rating:rating,comment:comment});

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
      req.flash("success","New Review Created!")
  res.redirect(`/listings/${id}`)
})

//Delete Review
router.delete("/:reviewId",wrapAsync(async (req,res)=>{
  let {id,reviewId}=req.params;
  await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
  await Review.findByIdAndDelete(reviewId);
        req.flash("success","Review Deleted!")
  res.redirect(`/listings/${id}`);
}))

module.exports = router;