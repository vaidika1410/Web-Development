const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-button");
const todoList = document.getElementById("todo-list");


let tasks = []

addTaskButton.addEventListener("click", function(){
    const taskText = todoInput.value.trim();

    if(taskText === "") return;

    const newTask = {
        id : Date.now(),
        text : taskText,
        completed : false
    }

    tasks.push(newTask);
    todoInput.value = ""; //clears input field
    console.log(tasks);
})