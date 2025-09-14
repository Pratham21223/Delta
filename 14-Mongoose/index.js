const mongoose = require("mongoose");
main()
  .then((res) => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
const User=mongoose.model("User",userSchema);
// const user1=new User({
//     name:"Pratham",
//     email:"prathamrk.7@gmail.com",
//     age:18
// })
// user1.save();
// const user2=new User({
//     name:"Khanak",
//     email:"khanakkataria4@gmail.com",
//     age:15
// })
// user2.save();

// User.insertMany([
//     {name:"Jayshree",email:"Jayshreerk.@gmail.com",age:44},
//     {name:"Ramesh",email:"Jayshreerk.@gmail.com",age:51},
//     {name:"Sayarbai",email:"Jayshreerk.@gmail.com",age:80},
// ])

// User.find({age:{$gt:47}}).then((data)=>console.log(data));
// User.updateOne({name:"Khanak"},{age:14}).then((res)=>console.log(res));
// User.find({}).then((data)=>console.log(data))

// User.findOneAndUpdate({name:"Khanak"},{age:14},{new:true}).then((data)=>console.log(data))
// User.findByIdAndUpdate("68b9a62c7d3591f3be934af3",{age:14},{new:true}).then((data)=>console.log(data))
User.findByIdAndDelete("68b9a9a65147108ba47876bd").then((res)=>console.log(res));