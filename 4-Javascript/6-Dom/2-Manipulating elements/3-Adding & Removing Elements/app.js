//Adding elements
let newPara=document.createElement('p')
newPara.innerText="Hello!";

//Inserting element
//Appendchild function 
//inserting this newPara
let body=document.querySelector('body');
body.appendChild(newPara) //at last added

//creating a button
let btn=document.createElement('button');
btn.innerText="Click me!"
let box=document.querySelector('.box')
box.appendChild(btn)

//Append function (adding elements at last)
newPara.append("New append")
newPara.append(btn)

//prepend (adding elements before)
newPara.prepend("Prepend ")

//insert adjacent.
let button=document.createElement('button');
button.innerHTML="New btn"
let p=document.querySelector('p')
p.insertAdjacentElement('beforebegin',button)
p.insertAdjacentElement('beforeend',button)
p.insertAdjacentElement('afterbegin',button)
p.insertAdjacentElement('afterend',button)

//Removing
// removechild--> appendchild
// remove ---> append
body.removeChild(button);
btn.remove()