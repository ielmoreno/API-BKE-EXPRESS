import express from "express"
import userRouter from "./routers/userRouter.js"
import prodsRouter from "./routers/prodsRouter.js"

const app = express()
const port = 3000

app.use('/user', userRouter)
app.use('/prods', prodsRouter)

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.post('/', (req, res) => {
    res.send('Olá Mundo!')
  })

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
