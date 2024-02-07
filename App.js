const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const port=process.env.PORT || 3001;
const tasks=require('./routes/tasks');
const connectDb=require('./Db/connect')

app.use(express.json())
app.get('/',(req,res)=>{
        res.send('All tasks');
})

app.use('/tasks',tasks);
const start=async()=>{
        try{
                await connectDb();
                app.listen(port,(error)=>{
                        if(!error){
                                console.log(`app running on ${port}`);
                        }
                        else{
                                console.log('error occured');
                        }
                })
        }catch(error){
                console.log(error);
        }
}
start();

