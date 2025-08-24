//Async
// async function greet(){
//   console.log("Hello!")
//   throw "Some random error"
// }
// greet()
//   .then(()=>{
//     console.log("Successful!")
//   })
//   .catch((error)=>{
//     console.log("Failure!: ", error)
//   })


//Await
  function getNumber(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
      let num=Math.floor(Math.random()*10)+1;
      console.log(num);
      resolve();
      },1000);
    })
  }
  //Print random number after 1 second delay
  async function demo(){
    await getNumber();
    await getNumber();
    await getNumber();
  }

  //Changing color with async and await keywords
  h1=document.querySelector('h1');
  function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    let num=Math.floor(Math.random*10)+1;
    if(num>3){ reject() };
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
  }

  async function color(){
    try{
    await changeColor("red",1000)
    await changeColor("orange",1000)
    await changeColor("green",1000)
    await changeColor("yellow",1000)
    await changeColor("blue",1000)
    }
    catch{
      let num=5;
      console.log(num+3);
    }
  }
  color();
