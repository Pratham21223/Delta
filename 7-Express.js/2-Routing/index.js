const express=require("express");
const app=express();
// console.dir(app);

let port = 3000; //Just like land-sea ports basically a connection point between client and server
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`)
    })

app.get("/",(req,res)=>{
    res.send("You are at the root path")
})
app.get("/apple",(req,res)=>{
        res.send({
        fruit:"apple",
        color:"red"
    })
})
app.get("/orange",(req,res)=>{
    res.send({
        fruit:"Orange",
        color:"Orange"
    })
})
app.get("/mango",(req,res)=>{
    res.send({
        fruit:"Mango",
        color:"Yellow"
    })
})
app.use((req,res)=>{
    res.send({
    error: "File not found",
    message: "Please check the URL"
  });
});

app.post("/",(req,res)=>{
    res.send("You sent a post request to rooted")
})

