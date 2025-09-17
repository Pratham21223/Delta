const express = require("express");
const app = express();
const users = require("./routes/user.js")
const posts = require("./routes/user.js")
const cookieParser=require('cookie-parser');

app.use(cookieParser("secretCode"));
app.use("/users",users)
app.use("/posts",posts)
app.get("/getcookies",(req,res)=>{
    res.cookie("greet","Hello")
    res.send("Sent cookies");
})
app.get("/",(req,res)=>{
    console.dir(req.cookies);
})

app.get("/greet",(req,res)=>{
    res.cookie("name","Pratham");
    let {name="Anonymous"} = req.cookies;
    res.send(`Hi, ${name}`)
})

app.get("/signedcookie",(req,res)=>{
    res.cookie("made-in","India",{signed:true});
    res.send("Signed cookie sent")
})

app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("Verified!");
})
// //User
// //Index 
// app.get("/user ",(req,res)=>{
//     res.send("I am root")
// })
// app.get("/user /:id",(req,res)=>{
//     res.send("I am root")
// })
// app.post("/user ",(req,res)=>{
//     res.send("I am root")
// })
// app.delete("/user /:id",(req,res)=>{
//     res.send("I am root")
// })

// //Posts
// //Index 
// app.get("/posts",(req,res)=>{
//     res.send("I am root")
// })
// app.get("/posts/:id",(req,res)=>{
//     res.send("I am root")
// })
// app.post("/posts",(req,res)=>{
//     res.send("I am root")
// })
// app.delete("/posts/:id",(req,res)=>{
//     res.send("I am root")
// })





app.use((req,res)=>{
    res.send("Page not found")
})
app.listen(3000, () => console.log("Server Started!"));