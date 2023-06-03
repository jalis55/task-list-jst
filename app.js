let form=document.querySelector("#task_form");

let task=document.querySelector("#new_task");

let all_tasks=document.querySelector("#tasks");

let filter_task=document.querySelector("#task_filter");

let clear_task_btn=document.querySelector("#clear_task_btn");





form.addEventListener('submit',addTasks);

clear_task_btn.addEventListener("click",clear_all_tasks);

all_tasks.addEventListener("click",removeTask);

filter_task.addEventListener('keyup',task_filter)

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

function task_filter(e){
    let search_text=e.target.value.toLowerCase();
    document.querySelectorAll("li").forEach((task)=>{
        let item=task.firstChild.textContent;
        if (item.toLocaleLowerCase().indexOf(search_text) !=-1){
            task.style.display='block';
        }
        else{
            task.style.display='none';
        }

    });

}

//local storage
