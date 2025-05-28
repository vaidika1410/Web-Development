document.addEventListener("DOMContentLoaded", ()=>{
    const taskInput = document.getElementById("task-input")
    const addTaskBtn = document.getElementById("add-task-btn")
    const todoList = document.getElementById("tasks")


    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task) => {
        renderTasks(task);
    })


    addTaskBtn.addEventListener('click', ()=>{
        const taskText = taskInput.value.trim();

        if(taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        }

        tasks.push(newTask);
        renderTasks(newTask);
        saveTasks();
        taskInput.value = "";
        console.log(tasks)
    })

    function renderTasks(task){
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);

        if(li.completed) li.classList.add("completed");

        let span = document.createElement('span')
        span.innerHTML = `${task.text}`
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete"

        li.addEventListener("click", function(e){
            if(e.target.tagName === 'BUTTON'){
                e.stopPropagation();
                tasks = tasks.filter((t) => t.id = !t.id)
                li.remove();
                saveTasks();
            }

            task.completed = !task.completed;
            li.classList.toggle("completed")
            saveTasks();
        })


        li.append(span)
        li.append(deleteBtn)
        todoList.appendChild(li)

    }


    function saveTasks(){
        localStorage.setItem('tasks' ,JSON.stringify(tasks))
    }
})