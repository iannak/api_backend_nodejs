const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
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

// routes params in request body
app.route('/api/users').get((req, res) => {
  res.send(req.params)
  console.log(req.params)
  console.log(req.query)
})

app.route('/api/:post_id/likes').get((req, res) => {
  const {
    post_id
  } = req.params;
  res.send(post_id);
  console.log(post_id);
})

app.route('/api/:post_id/likes').post((req, res) => {
  const {
    nome,
    cidade,
    endereco,
    email,
    telefone
  } = req.body;
  res.send(nome, cidade, endereco, email, telefone);
})

app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
app.route('/identidade/:nome').post((req, res) => res.send(req.params.nome))

// routes params in request 2
app.route('/').get((req, res) => res.send('Hello World'))
app.route('/:nome').get((req, res) => res.send(req.params.nome))

// routes params in request query
// os querys sao indentificados por ?nome=valor
app.route('/').get((req, res) => res.send(req.query))
app.route('/about/user').get((req, res) => res.send(req.query))

// api github routes
app.route('/api/github').get((req, res) => {
  axios.get('https://api.github.com/users/franzannakarolina')
  .then(response => {
    res.send(response.data)
  })
  .catch(error => {
    console.log(error)
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