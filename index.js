const {mineboty} = require("mineboty")
mineboty();
const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Bot has joined!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
