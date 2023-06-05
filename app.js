let form=document.querySelector("#task_form");

let task=document.querySelector("#new_task");

let all_tasks=document.querySelector("#tasks");

let filter_task=document.querySelector("#task_filter");

let clear_task_btn=document.querySelector("#clear_task_btn");


document.addEventListener('DOMContentLoaded', getTasks);


form.addEventListener('submit',addTasks);

clear_task_btn.addEventListener("click",clear_all_tasks);

all_tasks.addEventListener("click",removeTask);

filter_task.addEventListener('keyup',task_filter)

function addTasks(e){
    console.log('clicked');
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
   
        btn.style.marginLeft="20px";

        li.appendChild(btn);
        //store in local storage
        storeTaskInLocalStorage(task.value);
        task.value=''
        
    }
    e.preventDefault();
}
function clear_all_tasks(){
   
    while (all_tasks.firstChild){
        all_tasks.firstChild.remove()
    }
    localStorage.clear()
    


}

function removeTask(e){
    
    if (e.target.tagName=="BUTTON"){
        if (confirm("Are you sure?")) {
            let element=e.target.parentElement;
            element.remove();
            removeFromLS(element)
        }
        
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
// Store in Local Storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task));
        // let link = document.createElement('a');
        // link.setAttribute('href', '#');
        // link.innerHTML = 'x';
        // li.appendChild(link);
        // taskList.appendChild(li);

        let btn=document.createElement("button")
        btn.innerText="Remove"
   
        btn.style.marginLeft="20px";

        li.appendChild(btn);
        all_tasks.appendChild(li)
    });
}

function removeFromLS(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = taskItem;
    li.removeChild(li.lastChild); // <a>x</a>'

    tasks.forEach((task, index) =>{
        if(li.textContent.trim() === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}