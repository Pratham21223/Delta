const sum=(a,b)=>{
    console.log(a+b)
};
sum(3,4)
const cube=(a)=>{
    let cube=Math.pow(a,3);
    console.log(cube)
}
cube(11)
const pow=(a,b)=>{
    return a**b;
}
const hello=()=>{
    console.log('hello world!')
}

console.log('Implicit return value');
// const pow2=(a,b)=>(  //no curly braces it's parenthesis
//     a**b
// )
const pow2=(a,b)=>a**b
console.log(pow2(2,4)); //16