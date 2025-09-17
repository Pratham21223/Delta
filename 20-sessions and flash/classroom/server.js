const express = require("express");
const app = express();
const users = require("./routes/user.js")
const posts = require("./routes/user.js")
const session = require('express-session');
const flash = require('connect-flash')
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const sessionOptions = {
    secret : "mysupersecretstring",
    resave:false,
    saveUninitialized:true,
}
app.use(session(sessionOptions))
app.use(flash());
app.use((req,res,next)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
})

app.get("/reqcount",(req,res)=>{
    if(req.session.count) req.session.count++;
    else req.session.count = 1;
    res.send(`You sent a ${req.session.count} request`)
})
app.get("/test",(req,res)=>{
    res.send("test successful")
})

app.get("/register",(req,res)=>{
    let { name="Anonynous" } = req.query
    req.session.name = name; 
    console.log(req.session.name);

    if(name==="Anonynous") req.flash("error","user not registered");
    else req.flash("success","userRegistered successfully");
    res.send(`Hi, ${name}`)
})
app.get("/hello",(req,res)=>{

    res.render("page.ejs",{name: req.session.name})
})
app.listen(3000, () => console.log("Server Started!"));