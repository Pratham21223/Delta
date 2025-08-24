let sum=0; //Global Scope
function calSum(a,b){
    let sum=a+b; //Function Scope
}

//Higher order functions

function oddevenTest(str){
    if(str==='odd'){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    else if(str==='even'){
        let even=function(n){
            console.log(n%2==0)
            return even;
        }
    }
    else{
        console.log('wrong input');
    }
}
const calc={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    multi: function(a,b){
        return a*b;
    }
}

//shorthand
const calcshorthand={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    multi(a,b){
        return a*b;
    }
}