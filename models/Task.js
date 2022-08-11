const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        maxlength: 20,
        trim: true
    },
    completed: {
        type: 'boolean',
        default: false
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;