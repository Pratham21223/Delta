const student={
    name:'Pratham',
    age:18,
    phy:95,
    math:95,
    chem:93,
    getAvg(){
        // let avg=(phy+math+chem)/3;
        //this refers to parent object that is executing current piece of code.
        let avg=(this.phy+this.math+this.chem)/3;
        console.log(`${this.name} got avg marks=${avg}`);
        return avg;
    }
}

