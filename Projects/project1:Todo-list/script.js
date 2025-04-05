document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-button");
    const todoList = document.getElementById("todo-list");


    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task) => renderTask(task));

    addTaskButton.addEventListener("click", function () {
        const taskText = todoInput.value.trim();

        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        }

        tasks.push(newTask);
        saveTasks();
        todoInput.value = ""; //clears input field
        console.log(tasks);
    })

    //render tasks individually
    function renderTask(task) {
        // console.log(task.text)

        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        li.innerHTML = `
            <span>
                ${task.text}
            </span>
            <button>Delete</button>
            `
        todoList.appendChild(li);
    }


    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
})