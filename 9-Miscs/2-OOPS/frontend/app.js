let arr = [1,2,3];
arr.sayHello=()=> console.log("Hello, I am arr");
//Changing definition of push 
arr.__proto__.push = (n)=> console.log(`Pushin' number ${n}`);
console.log(Array.prototype);
console.log(String.prototype);

//Factory function
function personMaker(name,age){
    const person={
        name: name,
        age: age,
        talk(){
            console.log(`Hi my name is ${this.name}, I am ${this.age} years old`);
        }
    }
    return person;
}
let p1=personMaker("Pratham",18) //Copy created inefficient for memory.
console.log(p1.talk());
let p2=personMaker("Khanak",15) //Copy created inefficient for memory.
console.log(p2.talk());

//Constructors --> It doesn't return any thing Generally defined with Capitals
function Person(name,age){ 
    this.name=name; 
    this.age=age;
}


Person.prototype.talk=function(){
    console.log(`Hi my name is ${this.name}, I am ${this.age} years old`);
}
let pe1=new Person("Pratham",18); //New instances
let pe2=new Person("Khanak",14);
console.log(pe1.talk());
console.log(pe2.talk());


//Classes
class PersonClass{
    constructor(name,age){
        this.naam=name;
        this.age=age;
    }
    talk(){
    console.log(`Hi my name is ${this.name}, I am ${this.age} years old`);
    }
}
let person1=new PersonClass("Name",18);
console.log(person1);



//Inheritance
// parent class --> child class (inherit)
//extends and super
class s2tInteraction{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
    }
}
class student extends s2tInteraction{
    constructor(name,age,marks){
        super(name,age)
        this.marks=marks
    }
    talk(){
    console.log(`Hi my name is ${this.name}, I am ${this.age} years old`);
    }
}
let student1=new student("Pratham",18,95);
class Teacher extends s2tInteraction{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
    talk(){
    console.log(`Hi my name is ${this.name}, I teach ${this.subject}`);
    }
}