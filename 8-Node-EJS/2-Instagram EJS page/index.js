const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

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
  const followers=["adam","Khanak","Jayshree"]
  let { username } = req.params;
  console.log(username);
  res.render("Instagram.ejs", { username,followers},);
});
