let square = (n) => {
  return n * n;
};
let id2=setInterval(() => {
    console.log('Hello World!')
}, 2000);
setTimeout(() => {
    clearInterval(id2)
}, 10000);

//1
let arrAvg=(arr)=>{
  let avg=0;
  for (let i = 0; i < arr.length; i++) {
    avg+=arr[i]
  }
  avg/=arr.length;
  return avg
}
//2
let isEven=(n)=>{
  return n%2==0;
}