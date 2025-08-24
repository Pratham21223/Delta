//Map function
//unlike foreach map function creates an array of same size for returning.
let arr = [1, 2, 3, 4];
let double = arr.map((el) => {
  return el * 2; //multiplying every element by 2.
});

let students = [
  {
    name: "aman",
    marks: 95,
  },
  {
    name: "shradha",
    marks: 94.4,
  },
  {
    name: "rajat",
    marks: 92,
  },
];

let gpa = students.map((el) => {
  return el.marks / 10;
});

//filter function
//if callback is true the element is added in an array if callback is false it is not added.
let nums = [2, 3, 43, 4, 3, 43, 32, 4, 22, 3];
let even = nums.filter((el) => {
    return el % 2 == 0
}); //filtering even numbers




//Every method:logical and
//if for every element in the array callback return true then (value=true) for any element it returns false the (value=false)
let arr2=[2,4,6,5];
let andOperator=arr2.every((el)=>el%2==0);

//some method:logical or
let orOperator=arr2.some((el)=>el%2==0);


//Reduce method
//Reduces array into single line
//arr.reduce(accumalator,element) || Works on for_suming principle
let array=[1,2,3,4]
//1-acc=0;
//2-acc=acc+el
let reduce=array.reduce((acc,element)=>{
  console.log(acc)
  return acc+element
});
console.log(reduce);

//Max value in an array using reduce method
let num=[2,3,4,5,3,4,5,3,1,3,5,8,4,9]
let ans=num.reduce((max,el)=>{
  if(el>max){
    return el;
  }
  else{
    return max;
  }
})
console.log(ans)

//Practise Question 1
//Checking all numbers are greater than 10 or not
let great10=arr.every((el)=>el>10);

//Practise Question 2
//Find min in the array
let final=arr.reduce((min,el)=>{
  if(el<min){
    return el;
  }
  else{
    return min;
  }
})