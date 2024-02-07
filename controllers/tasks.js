const getAllTask=(req,res)=>{
        res.send('get all tasks');
}
const createTask=(req,res)=>{
        const {name}=req.body;
        if(!name){
                return res.status(404).send('Resource not found');
        }
        console.log(name);
        res.status(200).send(name);
}

const getTaks=(req,res)=>{
        res.send("get a task");
}

const updateTask=(req,res)=>{
        res.send('update task');
}

const deleteTask=(req,res)=>{
        res.send('Taks deleted');
}

module.exports={getAllTask,createTask,getTaks,updateTask,deleteTask}