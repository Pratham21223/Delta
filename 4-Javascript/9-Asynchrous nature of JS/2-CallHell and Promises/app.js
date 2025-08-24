h1=document.querySelector('h1');
// function changeColor(color,delay,nextColorChange){
//   setTimeout(()=>{
//     h1.style.color=color;
//     if(nextColorChange) nextColorChange();
//   },delay)
// }
// changeColor('red',500,()=>{
//   changeColor('orange',500,()=>{
//     changeColor('green',500)
//   })
// })
//nesting in callback --> callback hell
//Optimised approach using promises
function changeColor2(color,delay){
  return new Promise((resolve, reject) => {
    
      setTimeout(() => {
        h1.style.color=color
      }, delay)
      resolve();
      })
    }
changeColor2("red",5000)
.then((result)=>{
  console.log('Red color changed');
  return changeColor2("orange",500);
})
.then(()=>{
  return changeColor2("green",500)
})
.catch(()=>{
  console.log("Promise rejected")
})

//Call back hell
// function saveDta(data,success,failure){
//   let internetSpeed=Math.floor(Math.random()*10)+1;
//   if(internetSpeed>5){
//     success();
//   }
//   else{
//     failure();
//   }
// }

// saveDta("Pratham",()=>{
//   console.log('Success 1');
//   saveDta("Khanak",()=>{
//     console.log('Success 2');
//     saveDta("Bhushan",()=>{
//       console.log('Success 3')
//     },()=>{
//       console.log('failure')
//     })
//   },()=>{
//     console.log('Failure 2')
//   }
// )
// },
// ()=>{
//   console.log('failure 1')
// })

//Refractoring/optimisation using promise
function saveData(data){
  return new Promise((resolve,reject)=>{
      let internetSpeed=Math.floor(Math.random()*10)+1;
      if(internetSpeed>4){
        resolve("Success");
      }
      else{
        reject("Failure");
      }
  });
}

// console.log(saveData("Pratham"));

// let request=saveData("Pratham");
// request.then(()=>{
//   console.log("Promise was fulfilled")
// })
// .catch(()=>{
//   console 
// })

//Refractored approach
saveData("Khanak")
  .then((result)=>{
    console.log(result)
    console.log("Your data is saved")
    return saveData("Ayush")
  })
  .then((result)=>{
    console.log(result)
    console.log("Your second data is saved");
    return saveData("Pratham")
  })
  .then((result)=>{
    console.log(result)
    console.log("Your third data is saved")
  })
  .catch((error)=>{
    console.log(error);
    console.log("Some promise was rejected")
  })


