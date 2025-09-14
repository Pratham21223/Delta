const mongoose = require("mongoose");
main()
  .then(console.log("Connected to Db"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relation_demo");
}
const userSchema = new mongoose.Schema({
  username:String,
  email:String,
});
const postSchema=new mongoose.Schema({
    content:String,
    likes:Number,
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})
const User = mongoose.model("User",userSchema);
const Post = mongoose.model("post",postSchema);

const addData = async () => {
    let user1 = new User({
        username:"Prathamrk.7",
        email:"Pratham@123.com"
    })
    let post1=new Post({
        content:"Hello World",
        likes:7,
    })
    post1.user = user1;

    let post2=new Post({
        content:"Hello",
        likes:15,
    })
    post2.user = user1;
    // let res1=await user1.save();
    // console.log(res1);
    // let res2=await post1.save();
    // console.log(res2);
    let res3=await post2.save();
    console.log(res3);
}
// addData();

// const delData = async () => {
//     await User.findByIdAndDelete('68c57c799570de4d353c21f3');
//     await Post.findByIdAndDelete('68c57c799570de4d353c21f4');
//     await Post.findByIdAndDelete('68c57c799570de4d353c21f5');
// }
// delData();

const getData = async () => {
    let res = await Post.findOne({}).populate("user","username");
    console.log(res)
}
getData();