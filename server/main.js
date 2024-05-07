const express = require('express');
const TasksRepository = require('./repositories/tasks.repository');
const { getPool } = require('./db');
const cors = require('cors');
require('dotenv').config();
const app = express();


const PORT = process.env.PORT || 3000;

const tasksRepository = new TasksRepository(getPool());

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', async (req, res) => {
    const tasks = await tasksRepository.getAll();

    res.send(tasks);
});

app.post('/', async (req, res) => {
    const task = await tasksRepository.create(req.body);
    res.send(task);
});

app.put('/:id', async (req, res) => {
    const task = await tasksRepository.update(req.params.id, req.body);
    res.send(task);
});

app.delete('/:id', async (req, res) => {
    const task = await tasksRepository.delete(req.params.id);
    res.send(task);
});

app.get('/activity', async (req, res) => {
    const activity = await tasksRepository.getActivity();
    res.send(activity);
});

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));