const fs = require('fs'); // filespace
const filePath = 'nodeJS/Todo-list/tasks.json'

const loadTasks = () =>{
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveTasks = (tasks) =>{
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON)
}


const addTask = (task) => {
    const tasks = loadTasks()
    tasks.push({task})
    saveTasks(tasks)
    console.log('task added', task)
}

const removeTask = (index) => {
    const tasks = loadTasks()
    const taskIndex = index - 1 // since array index starts from 0

    if(taskIndex >= 0 && taskIndex < tasks.length){
        const removedItem = tasks.splice(taskIndex, 1) // creates a new array removing the elements from taskIndex upto 1 position 
        saveTasks(tasks)
        console.log(`removed task - ${removedItem[0].task}`)
    } else {
        console.log('invalid task index')
    }
}


const listTasks = () =>{
    const tasks = loadTasks()
    tasks.forEach((task, index) => {
        console.log(`${index + 1} - ${task.task}`)
    })
}


const command = process.argv[2] // --> argv stands for argument value which returns an array, the 0th and 1st index returns the file path and node configurations, thus argv[2] gives the command
const argument = process.argv[3] // --> returns an argument, after command at position 3

if(command === 'add') {
    addTask(argument)
} else if(command === 'remove') {
    removeTask(parseInt(argument))
} else if(command === 'list') {
    listTasks()
} else {
    console.log('command not found !')
}