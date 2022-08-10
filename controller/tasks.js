const getAllTasks = (req, res) => {
    res.send('get all');
};

const createTask = (req, res) => {
    res.json(req.body);
};

const getSingleTask = (req, res) => {
    res.json({ id: req.prams.id });
};

const updateTask = (req, res) => {
    res.send('update task');
};

const deleteTask = (req, res) => {
    res.send('delete task');
};


module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getSingleTask
};