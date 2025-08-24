let smallImage=document.getElementsByClassName("oldImg");
for(let i=0;i<smallImage.length;i++){
    // smallImage[i].src="assets/spiderman_img.png"; //Changing value of image
}

//returns all the paragraph in HTML collection
let paragraph=document.getElementsByTagName("p");
console.dir(paragraph)

//Query selector

console.dir(document.querySelector("h1"));
console.dir(document.querySelector('#description'));
console.dir(document.querySelector(".oldImg")); //First element of class .oldImg
console.dir(document.querySelector('p')); 
console.dir(document.querySelector("div a")); //div ke andar wala first anchor tag

//Selecting all
console.dir(document.querySelectorAll("p")); //all paragraphs
console.dir(document.querySelectorAll("div a")); //div ke andar wale sarre anchor tags
