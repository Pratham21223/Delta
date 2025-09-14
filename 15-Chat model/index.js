const express = require("express");
const app = express();
app.listen(8080, () => console.log("Server Started"));
const mongoose = require("mongoose");
const path = require("path");
const methodOverride=require('method-override');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
const Chat = require("./models/chat.js");
const Expresserr=require('./Expresserr.js')
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}
main()
  .then(() => console.log("Connection successful!"))
  .catch((err) => console.log(err));
function asyncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err) => next(err));
  }
}
//Index route
app.get("/chats", asyncWrap(async (req, res,next) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
}));

//New route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//create route
app.post("/chats", asyncWrap(async (req, res,next) => {
  let { from, to, msg } = req.body; //urlencoded
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  await newChat.save();
  res.redirect("/chats");
}));

//edit-show route
app.get("/chats/:id/edit", asyncWrap(async (req, res,next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs",{chat});
}));

//Show
app.get("/chats/:id/show",asyncWrap(async (req, res,next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  if(!chat) next(new Expresserr(404,"Chat not found or got deleted"));
  res.render("edit.ejs",{chat});
}));

//Update route
app.put("/chats/:id",asyncWrap(async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    await Chat.findByIdAndUpdate(id,{msg:newMsg},{updated_at:new Date()},{runValidators:true},{new:true});
    res.redirect("/chats"); 
}));

//Delete
app.delete("/chats/:id",asyncWrap(async (req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats")
}))

//Error handling middleware
app.use((err,req,res,next)=>{
  console.log(err.name);
  if(err.name==="ValidationError") console.log("Validation error")
  next(err)
})

app.use((err,req,res,next)=>{
  let {status=500, message="Internal Server Error"} = err;
  res.status(status).send(message); 
})