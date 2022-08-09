const express = require('express');
const app = express()
const tasks = require('./routes/tasks');
const port = 8080;


//middleware
app.use(express.json());

app.use('/api/v1/tasks/', tasks);

app.listen(port, () => {
    console.log(`server runing on port ${port}`);
})