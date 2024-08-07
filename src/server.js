const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.get('/user', (req, res) => {
    res.json({nome: "Gabriel", email: "gabmormed@gmail.com"})
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
