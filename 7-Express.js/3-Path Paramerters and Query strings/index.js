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
app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(`Welcome to the page of @${username}`)
})

//Query strings
app.get("/search",(request,response)=>{
    let {q}=request.query;
    if(!q) response.send("<h1>Nothing searched</h1>")
    response.send(`<h1>These are the searches for ${q}</h1>`);
})

