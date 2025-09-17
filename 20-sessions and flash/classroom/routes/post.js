const express = require('express');
const router = express.Router();


//Posts
//Index 
router.get("/",(req,res)=>{
    res.send("I am posts")
})
router.get("/:id",(req,res)=>{
    res.send("I am root")
})
router.post("/",(req,res)=>{
    res.send("I am root")
})
router.delete("/:id",(req,res)=>{
    res.send("I am root")
})