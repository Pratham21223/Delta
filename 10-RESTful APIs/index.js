const express = require("express");
const app = express();
const port = 8080;
app.listen(port, () => console.log("Server started"));
const path = require("path");
const methodOverride = require('method-override')
app.set("view engine", "ejs"); //setting view engine to ejs
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
const { v4: uuidv4 } = require('uuid');

// app.get("/",(req,res)=>{
// res.send("Server working well!")
// })

//Index route

let posts = [
  {
    id: uuidv4(),
    username: "PrathamKataria",
    content: "I love coding",
  },
  {
    id: uuidv4(),
    username: "KhanakKataria",
    content: "I love playing",
  },
  {
    id: uuidv4(),
    username: "JayshreeKataria",
    content: "I love cooking",
  },
];

app.get("/posts",(req,res)=>{ //resource -> posts
    res.render("index.ejs",{posts})
})

//Create and new route

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({ username , content, id:uuidv4()})
    res.redirect("/posts")
})

//Show posts
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("show.ejs",{post})
})

//Updating content
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=> id===p.id);
    post.content=newContent;
    res.redirect("/posts")
})

//edit route
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("edit.ejs",{post})
})
app.delete("/posts/:id",(req,res)=>{
  let {id}=req.params;
    posts=posts.filter((p)=> id!==p.id);
    res.redirect("/posts")
  })