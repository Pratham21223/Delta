let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns=['btn-1','btn-2','btn-3','btn-4']
let body=document.querySelector('body');
let startbtn=document.querySelector('button')
function startGame() {
  if (start == false) {
    start = true;
    levelUp();
  }
}

document.addEventListener("keypress", startGame);
startbtn.addEventListener("click", startGame);
function levelUp(){
  startbtn.style.display='none';
    userSeq=[]
    level++;
    h2.innerText='Level '+level;

    //random btn choose
    let randIdx=Math.floor(Math.random()*4);
    // console.log(randIdx)
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}
function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove('flash')
    },300);
}
function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove('userFlash')
    },300);
}

function checkAns(idx){
  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000)
    }
  } else{
        h2.innerText=`Game over! Your Score: ${level} \nPress any key to start` ;
        startbtn.style.display='block'
        startbtn.style.margin='auto'
        body.style.backgroundColor='red';
        setTimeout(function(){body.style.backgroundColor='white'},300)
        reset();
  }
}
function btnPress(){
  if(start==true){
  let btn=this;   //Important step
  // console.log(btn)
  userFlash(btn)
  let userColor= btn.getAttribute('id');
  console.log(userColor)
  userSeq.push(userColor)
  // console.log(userSeq)
  checkAns(userSeq.length-1);
}
}
let allBtns=document.querySelectorAll('.btn')
for(btn of allBtns){
  btn.addEventListener('click',btnPress)
}
function reset(){
  start=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}

