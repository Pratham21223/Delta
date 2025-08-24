//Spread : Expands iterables into multiple value
console.log('Spread')
let arr=[1,2,3,4,3,3,2,1,1,2,3,1,2,3,0];
console.log(...arr);
// Math.min(arr[0],arr[1],) //tedious way
console.log(Math.min(...arr)); /// to min value
console.log(..."Pratham Kataria") //... to individual characters


//Array literals
let newArr=[...arr]; //copy of array
newArr.push(6)
console.log(newArr)
let char=[..."Pratham Kataria"]
console.log(char)

//Adding two arrays using spread
let even=[0,2,4,6,8]
let odd=[1,3,5,7,9]
let nums=[...even,...odd]
nums.sort()
console.log(nums)


//Object Literals
const data={
    email: 'abc@xyz.com',
    password:'abcd'
}

const dataCopy={...data,id:123,country:'India'} //id:key 123:value (key value pair)
console.log(dataCopy)

//Array to objects
//obj needs key-value pair but array have only value 
//So, key --> index of array.
let  obj1={...arr}
console.log(obj1)
let greet='hello'
let obj2={...greet}
console.log(obj2)



console.log('')
console.log('Rest')
//Rest:Individual value to a single value, just opposite of spread.
//All arguments in to a bundle of array.
function print(...args){ //...args --> multiple arguments can to taken
    for(let i=0;i<args.length;i++){
        console.log('You gave us: ',args[i])
    }
}
console.log(print(1,2,3,4));

function sum(...args){
    args.reduce((sum,el)=>sum+el)
}