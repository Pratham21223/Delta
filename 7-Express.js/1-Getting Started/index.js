const express=require("express");
const app=express();
// console.dir(app);

let port = 3000; //Just like land-sea ports basically a connection point between client and server
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`)
})

app.use((req,res)=>{
    // console.log(req)
    console.log("Request recived")
    // res.send({
    //     fruit:"apple",
    //     color:"red"
    // })
    let code="<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li><li>Banana</li></ul>";
    res.send(code);
    
})