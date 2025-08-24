let body = document.querySelector("body");
let newPara = document.createElement("p");
newPara.style.color = "red";
newPara.innerText = "Hey Red!";
body.append(newPara);
let h3 = document.createElement("h3");
h3.style.color = "blue";
h3.innerText = "Hey blue!";
body.append(h3);
let maindiv = document.createElement("div");
maindiv.style.backgroundColor = "pink";
maindiv.style.border = "black";
let h1 = document.createElement("h1");
h1.innerText = "Hello I am new div!";
let innerp = document.createElement("p");
innerp.innerText = "Me too!!";
maindiv.appendChild(h1);
maindiv.appendChild(innerp);
body.append(maindiv);

//1
let btn=document.createElement("button");
btn.innerText="Click me!";
body.appendChild(btn)
let form=document.querySelector('form');
let user=document.querySelector('#Username')
user.setAttribute('placeholder','username')
let button=document.querySelector('button');
button.setAttribute('id','btn');
button.style.backgroundColor='blue';
button.style.color='white'
let he1=document.createElement('h1');
he1.innerText="Hello!"
body.appendChild(he1)
he1.style.textDecoration='underline solid black'
he1.style.color='purple';
let paragraph=document.createElement('p');
paragraph.innerHTML="Apna college <b>Delta</b> Practice";
body.appendChild(paragraph)