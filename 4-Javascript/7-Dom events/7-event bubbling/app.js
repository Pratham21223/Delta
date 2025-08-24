let div=document.querySelector('div');
let ul=document.querySelector('ul');
let li=document.querySelectorAll('li');
div.addEventListener("click",function(){
    console.log("div wass clicked")
})
ul.addEventListener("click",function(){
    // event.stopPropagation();
    console.log("ul wass clicked")
})
for(i of li){
i.addEventListener("click",function(){
    // event.stopPropagation();
    console.log(`li ${i} wass clicked`)
})
}