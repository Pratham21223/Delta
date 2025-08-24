function rand255(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let ans=`rgb(${red}, ${green}, ${blue}  )`
    return ans;
}
let btn=document.querySelector("button")
let h2=document.querySelector("h2")
let div=document.querySelector("div")
btn.addEventListener("click",function(){
    let ans=rand255();
    h2.innerText=ans;
    h2.style.color=ans;
    div.style.backgroundColor=ans;
})