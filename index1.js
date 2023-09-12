const fs = require('fs')
const http = require('http')
const server = http.createServer((request, response) => {

    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    let filePath = __dirname+'/page' + pathname
    fs.readFile(filePath,(err,data)=>{
        if(err){
            response.statusCode= 500
            response.end('readErr111')
            return
        }
        response.end(data)
    })
   
    
})
server.listen(9001, () => {
    console.log('伺服器已啟動...');
})
