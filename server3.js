const fs = require('fs')
const http = require('http')
const path = require('path')
const qs = require('querystring')
const server = http.createServer()
server.on('request', (req, res) => {
    if (req.url === '/index.html' || req.url === '/') {
        fs.readFile(path.join(__dirname + '/20240417/dist/indexmin.html'), (err, data) => {
            if (err) return console.log(err)
            res.setHeader('Content-Type', 'text/html;charset=utf-8')
            res.end(data.toString())
        })
    } else {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('您訪問的資源不存在')
    }


})


//監聽端口,啟動服務
server.listen(2000,()=>{
    console.log('server is running!!!')
})
