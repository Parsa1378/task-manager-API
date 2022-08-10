const mongodb = require('mongoose');
const connectionString = 'mongodb+srv://prxaps:parsaP1378@todoapinode.xyalz5u.mongodb.net/TodoAPINode?retryWrites=true&w=majority';

const connectDB = (url) => {
    return mongodb
        .connect(connectionString)
};

module.exports = connectDB;