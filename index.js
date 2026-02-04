const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/* const transactions = [{
    amount: '',
    description: ''
}] */

const transactions = []

app.post('/transaction', (req, res) => {
    const { amount, description } = req.body
    transactions.push({ amount, description })
})

app.get('/transaction', (req, res) => {
    res.status(200).send({ transactions })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})