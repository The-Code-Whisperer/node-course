const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e)

    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.patch('/users/:id', async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        console.log(req.body)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {

        return res.status(400).send(e)
    }
})

app.post('/task', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
    // const task = new Task(req.body)
    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

app.get('/task', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }

    // Task.find({}).then(task => {
    //     res.send(task)
    // }).catch(e => {
    //     res.status(500).send()
    // })
})

app.get('/task/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById({ _id })
        if (!task) {
            return res.status(404).send()
        }
        
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }

    // Task.findById({ _id }).then(task => {
    //     if (!task) {
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch(e => {
    //     res.status(500).send()
    // })
})

app.listen(port, () => {
    console.log(`Server is up and running on ${port}`);
})

