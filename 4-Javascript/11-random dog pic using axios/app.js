
let url="https://dog.ceo/api/breeds/image/random";
let img=document.querySelector('img');
let btn=document.querySelector('button');
btn.addEventListener("click",async () => {
    let image = await getFacts();
    img.setAttribute('src',image)
})
async function getFacts() {
    try{
    let res=await axios.get(url);
    return res.data.message;
    }
    catch(err){
        console.log(err);
        return "No picture found";
    }
}
