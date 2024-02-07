const express=require('express');
const router=express.Router();

const {getAllTask,
        createTask,
        getTaks,
        updateTask,
        deleteTask}=require("../controllers/tasks")

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTaks).patch(updateTask).delete(deleteTask);


module.exports = router;