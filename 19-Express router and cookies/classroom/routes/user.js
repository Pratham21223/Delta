const express = require('express');
const router = express.Router();

//Index 
router.get("/",(req,res)=>{
    res.send("I am user")
})
router.get("/:id",(req,res)=>{
    res.send("I am user")
})
router.post("/",(req,res)=>{
    res.send("I am user")
})
router.delete("/:id",(req,res)=>{
    res.send("I am user")
})

module.exports = router;