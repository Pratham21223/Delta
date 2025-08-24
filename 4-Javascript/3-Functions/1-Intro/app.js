// function hello(){
//     console.log('Hello!')
// }
// hello();
// function rollDice(){
//     let rollDice=Math.floor(Math.random()*6);
//     rollDice=rollDice+1;
//     console.log(rollDice)
// }
// rollDice();
// function printName(name){
//     console.log(name)
// }
// // printName(prompt('Enter your name'))

// //Return keyword.
// function avg(a,b,c){
//     return (a+b+c)/3;
// } 

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,(1,2)));
let sum=0;
let n=prompt('Enter the value of n for sum of n numbers')
for (let i = 1; i <=n; i++) {
    sum+=i;
}
console.log(sum)

let str=['Hi','hello','bye'];
function concate(str){
    let result="";
    for (let i = 0; i < str.length; i++) {
        result+=str[i];
    }
    return result;
}