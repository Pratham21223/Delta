let jsonRes='{"name":"Pratham", "age":18}'
let validresp=JSON.parse(jsonRes);
console.log(validresp.name)
console.log(validresp.age)
let student={
    name:"Pratham",
    age:18,
    marks:72.17
}

let url="https://catfact.ninja/facts";
fetch(url)
    .then((res)=>{
    console.log(res)
    return res.json();
    })
    .then((data)=>{
        console.log(data.data[0].fact);
        return fetch(url);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data.data[Math.floor(Math.random()*10)+1].fact)
        console.log(data.data)
    })
    .catch((err)=>{
    console.log(err)
})

//Using async and await
// async function getFacts() {
//     try{
//     let res=await fetch(url);
//     let data=await res.json();
//     console.log(res);
//     console.log(data.data[Math.floor(Math.random()*10)+1].fact)
//     }
//     catch(err){
//         console.log(err);
//     }
// }


//Using axios
let p=document.querySelector('p')
let btn=document.querySelector('button');
btn.addEventListener("click",async () => {
    let fact = await getFacts();
    p.innerText=fact;
})
async function getFacts() {
    try{
    let res=await axios.get(url);
    return res.data.data[Math.floor(Math.random()*10)+1].fact;
    }
    catch(err){
        console.log(err);
        return "No fact found";
    }
}
