let p=document.querySelector('p')
p.addEventListener('click',function(){
    console.log("You clicked on para")
})
let box=document.querySelector('.box')
box.addEventListener("mouseenter",function(){
    console.log("Mouse inside box")
})

//this in event listner
let btn=document.querySelector('button');
btn.addEventListener("click",function(){
    console.log(this.innerText); //btn is only this
    this.style.backgroundColor="blue";
    this.style.color="white";
})

//if we want to make selected content to blue. 
let h1=document.querySelector('h1')
let h3=document.querySelector('h3');
function changeColor(){
    this.style.backgroundColor="blue";
}
h1.addEventListener("click",changeColor)
h3.addEventListener("click",changeColor)
btn.addEventListener("click",changeColor)
p.addEventListener("click",changeColor)