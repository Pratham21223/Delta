const express=require('express');
const app=express();
const path=require("path");
const port = 8080;

//View
app.set("views",path.join(__dirname,"/views"))
//EJS calling
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
 app.get("/rolldice",(req,res)=>{
    let diceNumber=Math.floor(Math.random()*6)+1; //From database
    res.render("rolldice.ejs",{num: diceNumber})
 })
