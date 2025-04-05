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
            complete: false
        };

        tasks.push(newTask);
        saveTasks();
        renderTask(newTask);
        todoInput.value = "";
    });

    function renderTask(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        li.classList.toggle("complete", task.complete);

        const span = document.createElement("span");
        span.textContent = task.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        // Toggle complete on span click
        span.addEventListener("click", () => {
            task.complete = !task.complete;
            li.classList.toggle("complete");
            saveTasks();
        });

        // Delete button click
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // prevents bubbling
            tasks = tasks.filter(t => t.id !== task.id);
            li.remove();
            saveTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }



    //theme toggle
    const themeToggle = document.getElementById("theme-toggle");

    // Apply saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "🌞";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // Update button icon
        const isDark = document.body.classList.contains("dark");
        themeToggle.textContent = isDark ? "🌞" : "🌙";

        // Save preference
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

});
