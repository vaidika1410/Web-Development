const http = require('http')
const fs = require('fs')
const path = require('path')


const port = 3000

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : "req.url")
    console.log(filePath)

    const extensionName = String(path.extname(filePath)).toLowerCase()
    
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'text/png',
    }

    const contentType = mimeTypes[extensionName] || 'application/octet-stream'

    fs.readFile(filePath, (error, content) => {
        if(error) {
            if(error.code === 'ENOENT'){
                res.writeHead(404, {'content-type': 'text/html'})
                res.end('file not found')
            }
        } else {
            res.writeHead(200, {'content-type': contentType})
            res.end(content, 'utf-8')
        }
    })
})

server.listen(port, ()=>{
    console.log('server is listening on port ' + port)
})