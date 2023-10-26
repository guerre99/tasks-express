const express = require('express')

const app = express()

app.use(express.json())

const db = { tasks: [] }

app.get('/tasks', (req, res) => {})
app.get('/tasks/:taskId', (req, res) => {})

app.post('/tasks', (req, res) => {})
app.put('/tasks/:taskId', (req, res) => {})
app.delete('/tasks/:taskId', (req, res) => {})

app.listen(4001, () => console.log('Server on..'))
