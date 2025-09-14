const express = require("express");
const app = express();
app.listen(8080, () => console.log("Server Started"));
const Err1=require('./error.js')

app.get("/err",(req,res)=>{
    abcd=abcd
})
app.use("/err",(err,req,res,next)=>{
    console.log('----ERROR-----')
    next(err);
})
app.use("/err",(err,req,res,next)=>{
    console.log('----ERROR2-----')
    next(err);
})

app.use("/api",(req,res,next)=>{
  let {token} = req.query;
  if(token==="giveaccess") next();
  throw new Err1(401,"Access Denied!");
})
app.get("/api",(req,res)=>{
  res.send("Data")
})


app.get("/admin",(req,res)=>{
    throw new Err1(403,"Access to Admin is denied")
})
app.use((err,req,res,next)=>{
    let {status=500,message="Internal Server Error"}=err;
    res.status(status).send(message);
})


