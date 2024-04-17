const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
  if (err) return console.log(err)
  const htmlStr = data.toString()
  const htmlResult = htmlStr.replace(/[\r\n]/g, '').replace(/\s+/g, ' ')
  fs.readFile(path.join(__dirname, 'public/index.js'), (err, data) => {
    if (err) return console.log(err)
    const jsStr = data.toString()
    const jsResult = jsStr.replace(/[\r\n]/g, '').replace(/\s+/g, ' ').replace(/console.log\('.*?'\)/g, '')
    fs.writeFile(path.join(__dirname, 'dist/indexmin.html'), htmlResult + `<script>${jsResult}</script>`, err => {
      console.log(err)
    })
  })
})
