const fs = require('fs')
const http = require('http')
const path = require('path')

const server = http.createServer((req, res) => {
    
    fs.readFile(path.join(__dirname+'/data.json'), (err, data) => {
        if (err) return console.log(err);
                // console.log(data.toString())
                res.end(data.toString())
    })
    
    
})
    

//監聽端口,啟動服務
server.listen(2000, () => {
    console.log('伺服器已啟動...0.0');
})
