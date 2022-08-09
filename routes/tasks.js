const express = require('express');
const router = express.Router();

const { getAllTasks, createTask, deleteTask, updateTask, getSingleTask } = require('../controller/tasks');


router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').patch(updateTask).delete(deleteTask).get(getSingleTask);

module.exports = router;