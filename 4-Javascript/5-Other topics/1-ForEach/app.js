let arr=[1,2,3,4];
arr.forEach(function (el){
    console.log(el)
})

//arrow function
arr.forEach((el)=>{
    console.log(el)
})

// let print=function(el){
//     console.log(el)
// } 
// arr.forEach(print)

let arr2=[{
    name:'Pratham',
    age:18.
},{
    name:'Khanak',
    age:14.
},{
    name:'Ramesh',
    age:50.
}]
arr2.forEach((student)=>{
    console.log(student.age)
})