let addTaskButton = document.getElementById('addbtn');
let taskList = document.getElementById('tasklist');
let task = document.getElementById('task');
let text = ''
let array = []
let clearButton = document.getElementById('clrbtn');
let removeButton = document.getElementById('rembtn');
let message = document.getElementById('errmsg');

clearButton.onclick = function(){
  taskList.innerHTML = ''
  array.length = 0
}

// removeButton.onclick = function(){
//     let remtask = task.value;
//     if(array.length == 0){
//         message.innerHTML = 'NO TASK TO REMOVE'
//     }
//     else if(array.length > 0){
//         for(let y of array){
//             if(remtask == y){
//                 array.
//             }
//         }
//     }
// }


addTaskButton.onclick = function() {
    array.push(task.value);
    task.value = ' ';
    text = '';
    myfunction(array);
    taskList.innerHTML = text
    
} 
function myfunction(list){
   for(let x of list){
        text += '<ul>' +'<li>' + x + '</li>'+ '</ul';
   } 
}