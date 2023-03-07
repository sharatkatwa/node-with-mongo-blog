const express = require('express')
require('dotenv').config()

const app = express()

app.use('/', (req, res) => {
  res.send('<h1>Connect node with mongodb</h1>')
})
const port = process.env.PORT || 3000

app.listen(3000, () =>
  console.log(`server is connected to: http://localhost:${port}`)
)
