const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: 'string',
    completed: 'boolean'
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;