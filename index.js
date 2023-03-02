const express = require('express')

const app = express()

app.listen('3000', () => {
  console.log('Server is running on port 3000')
})

// middleware é a ponte entre as requisições
app.use(express.json())

// GET
app.route('/').get((req, res) => {
  res.send('Hello World')
})

// POST
app.route('/').post((req, res) => {
  res.send(req.body)
})