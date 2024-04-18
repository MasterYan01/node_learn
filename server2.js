const fs = require('fs')
const http = require('http')
const path = require('path')
const qs = require('querystring')

const server = http.createServer()
server.on('request', (req, res) => {
    if (req.url === '/api/data') {
        fs.readFile(path.join(__dirname + '/data.json'), (err, data) => {
            if (err) return console.log(err);
            res.setHeader('Content-Type', 'application/json')
            res.end(data.toString())
        })
    } else if (req.url.startsWith('/api/city')) {
        const parmasStr = req.url.split('?')[1]
        const parmasObj = qs.parse(parmasStr)
        const cname=parmasObj.cname
        //console.log(parmasObj.cname)
        //console.log(path.join(__dirname + '/city.json'))
        fs.readFile(path.join(__dirname + '/city.json'), (err, data) => {
            if (err) return console.log(err);
            const arr = JSON.parse(data.toString())
            console.log(arr[0].city,cname)
            //const pObj=arr.find(item=>{ item.city===cname})
            //const pObj=arr.find(item=>{item.city===parmasObj.cname})
            //const pObj=arr.find(item=>{item.city===parmasObj.cname})
            //res.setHeader('Content-Type', 'application/json')
            //res.end(JSON.stringify(pObj))
            //console.log(parmasObj)
            // const cityList=cityObj[parmasObj.cname]
            // res.setHeader('Content-Type', 'application/json')
            // res.end(JSON.stringify(cityList))
        })
    }

})


//監聽端口,啟動服務
server.listen(2000, () => {
    console.log('伺服器已啟動...0.0');
})
