const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Website Live - Port: ${port}`);
});

app.post('/addTask', (req, res) => {
    const taskId = generateTaskId();
    const taskName = req.body.taskName || 'Default Task';

    console.log(`Task Made - ID: ${taskId}, Name: ${taskName}`);

    res.send(`Task Made - ID: ${taskId}, Name: ${taskName}`);
});

app.post('/removeTask', (req, res) => {
    const taskId = req.body.taskId || 'No ID';

    console.log(`Task Finished / Removed - ID: ${taskId}`);

    res.send(`Task Finished / Removed - ID: ${taskId}`);
});

function generateTaskId() {
    return Math.floor(Math.random() * 1000);
}
