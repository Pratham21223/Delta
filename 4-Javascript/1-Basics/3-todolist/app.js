let toDo=[];
    let nums=prompt('Please enter your number');
while(true){
    if(nums==4){
        console.log('Quitting');
        break;
    }
    if(nums==1){
        for (let i = 0; i < toDo.length; i++) {
            console.log(i+1, toDo[i])
        }
    }
    else if(nums==2){
        let add=prompt('Enter your task');
        toDo.push(add);
        console.log('Task Added')
    }
    else if(nums==3){
        for (let i = 0; i < toDo.length; i++) {
            console.log(i, toDo[i])
        }
        let del=prompt('Enter task number you want to delete');
        toDo.splice(del-1,1);
    }
    nums=prompt('Please enter your number');
}