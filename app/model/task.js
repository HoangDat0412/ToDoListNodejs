const fs = require("fs"); // file system
const { title } = require("process");
const { stringify } = require("querystring");
const readAllTask = ()=>{
    const buffer = fs.readFileSync("task.json");
    // chuyển sang chuỗi 
    const taskString = buffer.toString()
    // chuyển sang kiểu json
    const taskJson = JSON.parse(taskString)
    
    return taskJson
}

const createTask = (title,description)=>{
    const newTask = {
        id:Math.random().toString(),
        title,
        description
    };
    let taskList = readAllTask();
    taskList = [...taskList,newTask]
    fs.writeFileSync("task.json",JSON.stringify(taskList))
    return newTask
}

const readDetailTask = (id) =>{
    let taskList = readAllTask()
    let index = taskList.findIndex(item => item.id === id)
    let task = taskList[index]
    return task
}

const updateTask = (id,title,description)=>{
    let taskList = readAllTask();
    let index = taskList.findIndex(item => item.id === id)
    taskList[index].title = title;
    taskList[index].description = description;
    fs.writeFileSync("task.json",JSON.stringify(taskList))
}

const deleteTask =(id) =>{
    let taskList = readAllTask();
    let index = taskList.findIndex(item => item.id === id)
    taskList.splice(index,1);
    fs.writeFileSync("task.json",JSON.stringify(taskList))
}

module.exports={
    readAllTask,
    createTask,
    readDetailTask,
    updateTask,
    deleteTask,
}