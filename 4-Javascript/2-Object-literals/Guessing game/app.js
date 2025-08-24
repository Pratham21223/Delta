let final=prompt('Enter final range of number');
let num=Math.ceil(Math.random()*final);
num=num+1;

let user=prompt('Enter the number in that range')
console.log('Computer entered', num);
console.log('You entered', user);
if(user==num){
    console.log('You guessed it correctly!');
}
else{
    console.log('Wrong guess please try again!')
}

