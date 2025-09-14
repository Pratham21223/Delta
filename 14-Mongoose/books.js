const mongoose = require("mongoose");
main()
  .then((res) => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength:15,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min:[0,"Price too low for selling"]
  },
});

const Book = mongoose.model("Book", bookSchema);
let book1 = new Book({
  title: "Mathematics",
  author: "R.D. Sharma",
  price: 1200,
});
book1
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
Book.findByIdAndUpdate("68b9d439360f15ef2d83ff37",{price:-100},{runValidators:true}).then((res)=>console.log(res)).catch((err)=>console.log(err.errors.price.properties.message));