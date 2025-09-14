const express = require("express");
const app = express();
app.listen(8080, () => console.log("Server Started"));

// app.use((req,res)=>{
//   let {q}=req.query;
//   console.log(q)
//   console.log("Hi, I am Middleware")
//   res.send("Middleware finished");
// })


//Next
// app.use((req,res,next)=>{
//   console.log("Hi, I am first middleware")
//   next();
// })
// app.use((req,res,next)=>{
//   console.log("Hi, I am second  middleware")
//   next();
// })


//logger - morgan
// app.use((req,res,next)=>{
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method,req.hostname,req.path,req.time)
//   next()
// })

//404
// app.use((req,res)=>{
//   res.send("Page not found")
// })
//Below request is not send since middleware send it
app.get("/",(req,res)=>{
  res.send("Root")
})


//Creating and API authenticator

app.use("/api",(req,res,next)=>{
  let {token} = req.query;
  if(token==="give access") next();
  res.send("Access denied")
})
app.get("/api",(req,res)=>{
  res.send("Data")
})