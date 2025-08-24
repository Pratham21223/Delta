//for timer
setTimeout(() => {
console.log('Hi there,')
}, 300);
setTimeout(() => {
console.log('Welcome to,')
}, 600);
setTimeout(() => {
    console.log('Bharat!')
}, 1000);

//set interval
//After every interval it will print 

// setInterval(() => {
// console.log('Hi there,')
// }, 300);
// console.log(id)
// setInterval(() => {
// console.log('Welcome to,')
// }, 600);
// setInterval(() => {
//     console.log('Bharat!')
// }, 1000);


//stoping setinterval
let id2=setInterval(() => {
    console.log('Hello World!')
}, 2000);
setTimeout(() => {
    clearInterval(id2)
}, 10000);

