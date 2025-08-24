//change event
let form=document.querySelector('form');
form.addEventListener("submit",function(event){
    event.preventDefault();
})
let user=document.querySelector('#name');
user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value = ", this.value) //shows change value
})

user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value = ", this.value) //shows change value
})