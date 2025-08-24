const url="https://icanhazdadjoke.com/";
async function getJokes() {
    try{
        const header={headers:{Accept:"application/json"}}
        let res=await axios.get(url,header);
        console.log(res.data.joke)
    }
    catch(err){
        console.log(err)
    }
}