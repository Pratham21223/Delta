//Any event taking place by clicking typing.
//inline events --> onclick
// let btns=document.querySelectorAll('button')
// for(btn of btns){
// btn.onclick=sayHello(); //onclick
// btn.onmouseenter=function(){ console.log("on mouse")} //onmouseenter :hovering a button
// }
function sayHello(){
    alert("Hello!")
}
function sayName(){
    alert("Pratham Kataria")
}

//Event listeners
//element.addEventListener("event",callback)
let btn=document.querySelector('button')
// btn.addEventListener("click",sayHello);
// btn.addEventListener("click",sayName);
btn.addEventListener("dblclick",function(){console.log("You double clicked!")});


