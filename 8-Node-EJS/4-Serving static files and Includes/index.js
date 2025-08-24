const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

//CSS in EJS
app.use(express.static(path.join(__dirname,"/public")));
//View
app.set("views", path.join(__dirname, "/views"));
//EJS calling
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/ig/:username", (req, res) => {
  let {username}=req.params
  const InstagramData=require("./data.json")
  const data=InstagramData[username];
  if(data){
  console.log(data)
  res.render("Instagram.ejs",{data: InstagramData[username]});
  } else{
    res.render("err.ejs")
  }
});

