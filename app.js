require('dotenv').config();
const express = require('express');
const app = express()
const tasks = require('./routes/tasks');
const port = 8080;
const connectDB = require('./controller/db/connect');


//middleware
app.use(express.json());

app.use('/api/v1/tasks/', tasks);

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server runing on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};


start();