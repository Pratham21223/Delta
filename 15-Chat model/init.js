const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}
main()
  .then(() => console.log("Connection successful!"))
  .catch((err) => console.log(err));

Chat.insertMany([
    {
        from: "Pratham",
        to: "Khanak",
        msg: "Bring juice while coming home",
        created_at: new Date(),
    },
    {
        from: "Khanak",
        to: "Pratham",
        msg: "Do you need anything else?",
        created_at: new Date(),
    },
    {
        from: "Amit",
        to: "Pratham",
        msg: "Let's meet at 6 PM.",
        created_at: new Date(),
    },
    {
        from: "Pratham",
        to: "Amit",
        msg: "Sure, see you then!",
        created_at: new Date(),
    },
    {
        from: "Khanak",
        to: "Amit",
        msg: "Can you send the report?",
        created_at: new Date(),
    },
]);
