let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    console.dir(event)
})
let inp=document.querySelector("input")
// inp.addEventListener("keydown",function(){
//     console.log("Key pressed") 
// })
inp.addEventListener("keyup",function(){
    console.log("Key pressed") 
})

//key and code.
// inp.addEventListener("keydown",function(event){
//     console.log("Key ", event.key);
//     console.log("code ", event.code);
// })

//charcter game
inp.addEventListener("keyup",function(event){
    if(event.key=="W"){
        console.log("Character moves forward")
    }
    else if(event.key=="S"){
        console.log("Character moves backwards")
    }
    else if(event.key=="D"){
        console.log("Character moves right")
    }
    else if(event.key=="A"){
        console.log("Character moves left")
    }
})