const fs = require('fs')
const http = require('http')
const path = require('path')
let mimes = {
    html: 'text/html',
    css: 'text/css'
}
const server = http.createServer((request, response) => {
    //獲取請求url的路徑
    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    let root = __dirname + '/page'
    //let root = __dirname+'/../'
    //拼接文件路徑
    let filePath = root + pathname
    //讀取文件fs異步api
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            //設置字符集
            response.setHeader('content-type', 'text/html;charset=utf-8')
            //判斷錯誤代碼
            switch (err.code) {
                case 'ENOENT':
                    response.statusCode = 404
                    response.end('<h1>404 not found @.@</h1>')
                default:
                    response.statusCode = 500
                    response.end('導致錯誤~.~')
            }
            return
        }

        let ext = path.extname(filePath).slice(1)
        //console.log(ext);
        let type = mimes[ext]
        if (type) {
            if (ext === 'html') {

                response.setHeader('content-type', type + ';charset=utf-8')
            } else {
                response.setHeader('content-type', type)
            }

        } else {
            response.setHeader('content-type', 'application/octet-stream')
        }
        //響應文件內容
        response.end(data)
    })
})


//監聽端口,啟動服務
server.listen(9005, () => {
    console.log('伺服器已啟動...0.0');
})
