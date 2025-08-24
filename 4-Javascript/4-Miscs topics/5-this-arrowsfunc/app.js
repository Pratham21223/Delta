const student={
    name:'Pratham',
    age:18,
    prop:this,
    //this is calling object.
    getName:function(){
        return this.name;
    },
    getage:()=>{
        return this.age;
    }
}