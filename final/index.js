const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

const connectDB = async () => {
  try {
    await mongoose.set('strictQuery', false).connect(process.env.MONGO_URI)
    console.log('database is connected')
  } catch (err) {
    console.log(err)
  }
}

app.use('/', (req, res) => {
  res.send('<h1>Connect node with mongodb</h1>')
})
const port = process.env.PORT || 3000

connectDB()
app.listen(3000, () =>
  console.log(`server is connected to: http://localhost:${port}`)
)
