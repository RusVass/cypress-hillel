const express = require('express')
const path = require("path")
const app = express()

app.use(express.static("dist/"))

app.get("*", (reg,res)=>{
  res.sendFile(path.resolve(__dirname, "dist", "index.html"))
})
module.exports = app
