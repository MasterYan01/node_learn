const fs = require('fs')
const path = require('path')
const express = require('express')
//const cors = require('cors')
const server = express()
//server.use(cors())
server.use(express.static('./public'))

server.get('/api/city',(req,res)=>{
  fs.readFile(path.join(__dirname,'data/city.json'),(err,data)=>{
    if(err) return console.log(err)
    res.send(data.toString())
  })
})

server.listen(2005,()=>{
  console.log('伺服器運行中')
})