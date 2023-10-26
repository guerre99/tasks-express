const express = require('express')

const app = express()

app.use(express.json())

const db = { tasks: [] }

app.get('/tasks', (req, res) => {
  res.send(db.tasks)
})
app.get('/tasks/:taskId', (req, res) => {
  db.tasks.forEach((task) => {
    if (task.id === +req.params.taskId) {
      res.send(task)
    } else res.status(404).json({ message: 'NOT FOUND' })
  })
})

app.post('/tasks', (req, res) => {
  let id = Date.now()
  let result = { id, ...req.body }
  db.tasks.push(result)
  res.send(result)
})
app.put('/tasks/:taskId', (req, res) => {
  db.tasks.forEach((task) => {
    if (task.id === +req.params.taskId) {
      task.body = req.body.body
      res.send(task)
    }
  })
})
app.delete('/tasks/:taskId', (req, res) => {
  db.tasks.forEach((task) => {
    if (task.id === +req.params.taskId) res.send(task)
  })
  const newTasks = db.tasks.filter((task) => task.id !== +req.params.taskId)
  db.tasks = newTasks
})
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' })
})

app.get('*', (req, res) => {
  res.status(404).json({ message: 'NOT FOUND' })
})

app.listen(4001, () => console.log('Server on..'))
