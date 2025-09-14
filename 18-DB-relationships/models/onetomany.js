const mongoose = require("mongoose");
main()
  .then(console.log("Connected to Db"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relation_demo");
}
const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});


const Order = mongoose.model("Order", orderSchema);
// const addOrders=async()=>{
//   let result=await Order.insertMany([
//     {item:"Samosa", price:10},
//     {item:"Pizza",price:30},
//     {item:"Chips",price:40},
// ])
// console.log(result)
// }
// addOrders();

let customerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId, //only saving object id
      ref: "Order",
    },
  ],
});

//Pre and post mongoose middlewares
// customerSchema.pre("findOneAndDelete",async (next) => {
//   console.log("pre middleware");
//   next();
// })
customerSchema.post("findOneAndDelete",async (customer) => {
  if(customer.orders.length){
    let res = await Order.deleteMany({_id : {$in : customer.orders}});
    console.log(res);
  }
})
const Customer=mongoose.model("Customer",customerSchema);

const addCustomer=async () => {
  let customer1=new Customer({
    name:"Pratham Kataria",
  })
  let order1 = await Order.findOne({item:"Chips"});
  let order2 = await Order.findOne({item:"Pizza"});
  customer1.orders.push(order1);
  customer1.orders.push(order2);

  let res=await customer1.save();
  console.log(res)
}
// addCustomer();

let findCustomers=async () => {
  let res = await Customer.find({}).populate("orders");
}
// findCustomers();

let AddCustomer = async () => {
  let newCustomer = new Customer({
    name: "Karan Arjun"
  });
  let newOrder = new Order({
    item:"Sandwich",
    price:100
  });

  newCustomer.orders.push(newOrder);
  await newOrder.save();
  await newCustomer.save();
  console.log("Add new customer")
}

// AddCustomer();


const delCustomer = async () => {
  let deletedData = await Customer.findByIdAndDelete('68c6d01424fad25efe0a0617');
  console.log(deletedData);
}
delCustomer();
