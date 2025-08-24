// Storing values of object in multiple variable
let names = ["tony", "bruce", "peter", "steve"];
let [winner, runnersup, ...others] = names;
console.log(winner, runnersup);

//In objects
let student = {
  name: "Khanak",
  age: 14,
  class: 10,
  username: "khanak@123",
  password: "1234",
};
let { username: user, password: secret, city = "Mumbai" } = student;
