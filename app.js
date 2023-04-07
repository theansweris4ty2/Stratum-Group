require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.static("./public"))
app.use(express.json())
const port = process.env.PORT || 3000


  const start = ()=> {app.listen(port, ()=>
  console.log(`Server listening on port ${port}`))}

start()
