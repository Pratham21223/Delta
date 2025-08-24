//Creating an object literal
/*object{
    keyname:
}*/

const student={
    name:'Pratham',
    age:18,
    marks:72.17,
    city:'Mumbai'
}
let student2=['pratham',18,72.17];
console.log(student)
console.log(student2)

const item={
    price:100,
    discount:10,
    colors:['red','pink']
}
console.log(item)

const post={
    username:'Pratham',
    content:'Profile Picture',
    likes: 100,
    repost:20,
    tags:'#khanak'
}
console.log(post)


console.log(' ');
console.log('Get values')
//get values
student.name='Pratham Kataria';
console.log(student.name)

console.log(' ');
console.log('Get values using variables')
let prop='repost';
console.log(post[prop])

//changing object values
console.log(' ');
console.log('changing object values');
student.city='Delhi'
console.log(student)
student.gender='Male'
console.log(student)
student.marks='A';
console.log(student)
student.marks=[92,68,80]
console.log(student)
delete student.marks
console.log(student)

//nesting
console.log(' ');
console.log('nesting');
const HomeInfo={
    pratham:{name:'Pratham Kataria', age:18,DOB:'30/04/2007'},
    khanak:{name:'Khanak Kataria', age:15,DOB:'16/10/2010'},
    ramesh:{name:'Ramesh Kataria', age:51,DOB:'10/12/1974'},
    jayshree:{name:'Jayshree Kataria', age:44,DOB:'7/10/1981'},
    sayarbai:{name:'Sayarbai Kataria', age:80,DOB:'1/1/1946'}
}
HomeInfo.sayarbai.DOB='5/3/1946'
console.log(HomeInfo)

//Array of objects
console.log(' ');
console.log('Array of objects');
const HomeInfo2=[
    {name:'Pratham Kataria', age:18,DOB:'30/04/2007'},
    {name:'Khanak Kataria', age:15,DOB:'16/10/2010'},
    {name:'Ramesh Kataria', age:51,DOB:'10/12/1974'},
    {name:'Jayshree Kataria', age:44,DOB:'7/10/1981'},
    {name:'Sayarbai Kataria', age:80,DOB:'1/1/1946'}
]
console.log(HomeInfo2)


//Math objects
console.log(' ');
console.log('Math objects');
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-12));
//floor means less than or equal to
console.log(Math.floor(5.5));
console.log(Math.floor(-5.5));
//ceil means greater than or equal to
console.log(Math.ceil(5.5));
console.log(Math.ceil(-5.5));
//Random value between [0,1)
console.log(Math.random());

//Random number between [0,10)
//Step 1 let num=Math.random();
//Step 2 num=num*10;
//Step 3 num=Math.floor(num);
//Step 4 num=num+1
// console.log(num)

let num=Math.random();
num=num*10;
num=Math.floor(num);
num=num+1
console.log(num)
console.log(Math.floor(Math.random()*10));