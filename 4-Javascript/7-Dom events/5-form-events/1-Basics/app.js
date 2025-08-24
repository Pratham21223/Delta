let form = document.querySelector("form");
form.addEventListener("submit",function (event){
    alert("Form submitted!") 
    event.preventDefault(); //prevent default action
})
