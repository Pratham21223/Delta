function Q1(arr,target){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=target){
            ans.push(arr[i]);
        }
    }
    return ans;
}

function Q2(str){
    let ans="";
    for (let i = 0; i < str.length; i++) {
        let currChar=str[i];
        if(ans.indexOf(currChar)==-1){
            ans+=currChar;
        }
    }
    return ans;
}