let form = document.querySelector("form");
form.addEventListener("submit",function (event){

    //Method 1 : for extracting data from form
    event.preventDefault();
    let name=document.querySelector('#name');
    console.log("Name ",name.value);
    let email=document.querySelector('#email');
    console.log("Email ",email.value);
    let password=document.querySelector('#password');
    console.log("Password ",password.value);
    alert("Hi "+name.value+", your password is set to "+password.value)

    //Method 2 : for extracting data from form
    event.preventDefault();
    let user=this.elements[0];
    let mail=this.elements[1];
    let pass=this.elements[2];
    console.dir(user.value)
    console.dir(mail.value)
    console.dir(pass.value)
})
