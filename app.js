let form=document.querySelector("#task_form");

let task=document.querySelector("#new_task");

let all_tasks=document.querySelector("#tasks");

let clear_task_btn=document.querySelector("#clear_task_btn");





form.addEventListener('submit',addTasks);

clear_task_btn.addEventListener("click",clear_all_tasks)
all_tasks.addEventListener("click",removeTask);

function addTasks(e){
    if (task.value=='' || task.value==null){
        alert("Task field can not be empty");
        return false;
    }
    else{
        
        let li=document.createElement("li")
        li.innerText=task.value
        all_tasks.appendChild(li)
        let btn=document.createElement("button")
        btn.innerText="Remove"
        // btn.style.background="red";
        btn.style.marginLeft="20px";
        // btn.style.width="4px";
        // btn.style.fontSize="2px";
        li.appendChild(btn);
        task.value=''
        
    }
    e.preventDefault();
}
function clear_all_tasks(){
   
    while (all_tasks.firstChild){
        all_tasks.firstChild.remove()
    }
    


}

function removeTask(e){
    
    if (e.target.tagName=="BUTTON"){
        e.target.parentElement.remove()
    }
}