let inp=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul')
let btn2=document.querySelector('.del')

function main(){
    let item=document.createElement('li');
    item.innerText=inp.value;
    item.type='1'
    ul.appendChild(item)
    inp.value="";
    let checkbox=document.createElement('input');
        checkbox.type='checkbox';
        item.appendChild(checkbox);
        
    btn2.addEventListener('click',function(){
        if(checkbox.checked){
            item.remove();
        }
    })
}
btn.addEventListener('click',main)
document.addEventListener('keydown',function(event){
    if(event.key=='Enter'){
        main();
    }
})