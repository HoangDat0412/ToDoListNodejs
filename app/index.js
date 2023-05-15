// import yargs 
const yargs = require("yargs")

// import data from task.json
// const fs = require("fs"); // fss viết tắt của file system (build in node js)

const { log } = require("console");

//import readAllTassk
const {readAllTask,createTask,readDetailTask,updateTask,deleteTask} = require("./model/task")
// import crate task

// tạo lệnh test 
// node app/index.js test
yargs.command({
    command:"test",
    handler: ()=>{
        console.log("test");
    }
})


// CRUD
// C   node app/index.js create --title="học node js" ==description="Đâu khó lắm đâu"
yargs.command({
    command:"create",
    builder:{
        title:{
            type:"string"
        },
        description:{
            type:"string"
        },

    },
    handler: (args)=>{
        const {title,description} = args
        const newtask = createTask(title,description)
        console.log("đã tạo mới công việc thành công",newtask);
    }
})

// R
yargs.command({
    command:"read-all",
    handler: ()=>{
        const result = readAllTask()
        console.log("Read All",result);
    }
})

// read detail    câu lệnh : node app/index.js read-detail --id="123"
yargs.command({
    command:"read-detail",
    builder:{
        id:{
            type:"string"
        }
    },
    handler: (args)=>{
        const {id} = args
        const task = readDetailTask(id)
        console.log("Read Detail ",task);
    }
})
// U    node app/index.js update --id="1" --title-"học react js" --description="cô trong 2 tuần"
yargs.command({
    command:"update",
    builder:{
        id:{
            type:"string"
        },
        title:{
            type:"string"
        },
        description:{
            type:"string"
        }
    },
    handler:(args)=>{
        const {id,description,title} = args
        updateTask(id,title,description)
    }
})

// D  node app/index.js delete --id="1"
yargs.command({
    command:"delete",
    builder:{
        id:{
            type:"string"
        }
    },
    handler: (args)=>{
        const {id} = args
        deleteTask(id)
    }
})

// lưu lại các lệnh vừa tạo 
yargs.parse()
