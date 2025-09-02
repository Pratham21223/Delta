const { name } = require("ejs");
let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => console.log("Server started"));
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));



let profiles=[
    {
        img:"/user.png",
        username:"Pratham.Kataria",
        name:"Pratham Kataria",
        occ:"Coder",
    },
    {
        img:"/user.png",
        username:"Khanak.Kataria",
        name:"Khanak Kataria",
        occ:"Coder",
    },
    {
        img:"/user.png",
        username:"Ramesh.Kataria",
        name:"Ramesh Kataria",
        occ:"Bussiness man",
    },
]
app.get("/profiles", (req, res) => {
  res.render("index.ejs",{profiles})
});
