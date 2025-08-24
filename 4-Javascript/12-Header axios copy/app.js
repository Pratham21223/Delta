let url="http://universities.hipolabs.com/search?country=";
let ul=document.querySelector('ol')
let btn=document.querySelector('button');
btn.addEventListener("click",async () => {
    let country=document.querySelector('input').value;
    let data=await getColleges(country);
    console.log(data);
    for (college of data) {
        let li=document.createElement('li')
        ul.appendChild(li);
        li.innerText=college.name;
    }
})
async function getColleges(country) {
    try{
        let result=await axios.get(url+country);
        return result.data;
    }
    catch(err){
        console.log(err)
    }
}