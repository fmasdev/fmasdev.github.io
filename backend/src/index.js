// src/index.js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('There is not front or request available in this app!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
