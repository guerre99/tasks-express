const express = require('express')

const app = express()

// configura un middleware para parsear las entradas con body json y las coloca en req.body
app.use(express.json())

const db = { tasks: [] }

app.get('/tasks', (req, res) => {
	res.json(db.tasks)
})
app.get('/tasks/:taskId', (req, res) => {
	console.log(req.params)

	db.tasks.push(req.params.taskId)

	console.log(db.tasks)

	res.send('tu task')
})

app.post('/tasks', (req, res) => {
	console.log(req.body)
})
app.put('/tasks/:taskId', (req, res) => {})
app.delete('/tasks/:taskId', (req, res) => {})

app.listen(4001, () => console.log('Server on..'))

// put y delete (taskId)
// Para identificar el recurso enviamos el input por el método params

// req.params = {}

// put y post (payload)
// Para enviar la data del nuevo recursos o los cambios del recurso enviamos el input por el metodo body

// req.body = {}
