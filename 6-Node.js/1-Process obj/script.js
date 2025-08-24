// let n=5;
// for(let i=0;i<n;i++){
//     console.log("Hello!", i);
// }
// //Type node script.js in the same directory.

//Process 
//Taking input from user 
let args=process.argv;
for (let i = 2; i < args.length; i++) {
    console.log("Hello!",args[i])
}
// Type node script.js Pratham Khanak etc. 
// console.log(process.argv)