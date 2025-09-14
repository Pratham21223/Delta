const mongoose = require("mongoose");
main()
  .then(console.log("Connected to Db"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relation_demo");
}
const userSchema = new mongoose.Schema({
  username: String,
  addresses: [
    {
    _id:false, //To not show id for every location
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);
const addUsers = async () => {
  let user1 = new User({
    username: "Pratham.Kataria",
    addresses: [{ location: "Kanjurmarg", city: "Mumbai" }],
  });
  user1.addresses.push({location:"Vikhroli",city:"Mumbai"});
  let result=await user1.save();
  console.log(result);
};
addUsers();