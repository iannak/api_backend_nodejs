const express = require('express')

const app = express()

app.listen('3000', () => {
  console.log('Server is running on port 3000')
})

let author = "Anna Karolina"

// middleware é a ponte entre as requisições
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// GET
app.route('/get').get((req, res) => {
  res.send(author)
  console.log(author)
})

// POST
app.route('/post').post((req, res) => {
  res.send(req.body)
})

// PUT
app.route('/put').put((req, res) => {
  author = req.body.author
  res.send(author)
})

// DELETE
app.route('/delete').delete((req, res) => {
  author = req.body.author
  res.send(author)
  console.log("Deleted")
})