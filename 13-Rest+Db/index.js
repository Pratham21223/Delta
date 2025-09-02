//View image.png
const { faker } =  require('@faker-js/faker');
const mysql = require('mysql2');
const express=require('express');
const app=express();
const path=require('path')
const method_override=require("method-override");
app.use(method_override("_method"));
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
app.listen("8080", () => console.log("Server started"));

app.get("/",(req,res)=>{
  let q="select count(*) from user";
  connection.query(q,(err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    let count = result[0]["count(*)"];
    res.render("home.ejs",{count})
  });
})

//Show route
app.get("/users",(req,res)=>{
  let q = "Select * from user";
  connection.query(q,(err, users) => {
    if (err) {
        console.log(err);
        res.send("Some error in DataBase")
        return;
    }
    res.render("user.ejs",{users})
  });
})

//Edit route
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`Select * from user Where id='${id}'`;
  connection.query(q,(err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    let user=result[0];
    res.render("editform.ejs",{user})
  });
})

//Update route
app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {password: formPass,username: newUsername}=req.body;
  let q=`Select * from user Where id='${id}'`;
  connection.query(q,(err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    let user=result[0];
    if(formPass!=user.password) res.send("Wrong password");
    else{
      let q2=`Update user SET username='${newUsername}' Where id='${id}'`;
      connection.query(q2,(err,result=>{
        if(err) throw err;
        res.redirect("/users")
      }))
    }
  });
})




const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'30042007',
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
];
}