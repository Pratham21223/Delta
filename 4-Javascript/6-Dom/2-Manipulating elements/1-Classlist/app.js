//Text based and content based properties.
let para = document.querySelector("p");
console.dir(para);
para.innerText; //Screen content
para.innerHTML; //Tags
para.textContent; //Hidden content also

//Attribute manipulations
let img = document.querySelector("img");
img.getAttribute("id");
img.setAttribute("id", "spiderman-img");
img.setAttribute("src", "assets/creation_3.jpeg");
img.setAttribute("class", "myImg");

// document.querySelector("h1").style.color = "purple";
// document.querySelector("h1").style.color = "red";
// document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.backgroundColor = "yellow";

let lists = document.querySelectorAll(".box a");
for (let i = 0; i < lists.length; i++) {
  lists[i].style.color = "green"; //inline styling.
}


//class list --> obj.classList
let heading=document.querySelector('h1')
heading.classList.add('green') //adding multiple class
heading.classList.add('underline') 

heading.classList.remove('underline') //removing class
console.log(heading.classList.contains('underline')) //boolean value

//toggle --> like switch on and off.
// yes --toggle--> no --toggle--> yes --toggle--> no.
// add --toggle--> remove --toggle--> add --toggle--> remove.
heading.classList.toggle('underline') //toggle on
heading.classList.toggle('underline') //toggle off
heading.classList.toggle('green') //toggle off
heading.classList.toggle('green') //toggle on


//Setting background color of the box to yellow
let box=document.querySelector('.box');
box.classList.add('yellowBg')

