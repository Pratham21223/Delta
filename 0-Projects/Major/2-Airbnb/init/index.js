const mongoose=require('mongoose');
const initData=require('./data.js');
const Listing = require('../models/listing.js');

const mongooseURL="mongodb://127.0.0.1:27017/wanderlust"
async function main() {
  await mongoose.connect(mongooseURL);
}
main()
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log(err));

  const initDb=async() =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
  }

  initDb();