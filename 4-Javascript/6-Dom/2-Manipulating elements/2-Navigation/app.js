//Navigation
//parentElement
//Let's us print parent element for h4.(i.e. div with class 'box')
let h4=document.querySelector('h4');
console.dir(h4.parentElement); //Parent element printed.

//Children
//Let's us print children element for body.(i.e. all 9 tags)
let body=document.querySelector('body');
console.dir(body.children);
let ul=document.querySelector('ul')
console.log(ul.childElementCount);


//Siblings
console.dir(ul.children[1].previousElementSibling.textContent); //previous sibling of First appearance
console.dir(ul.children[1].nextElementSibling.textContent); //previous sibling of next appearance
