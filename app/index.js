#!/usr/bin/env node
const http = require('http')

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end('<h1>Hello!</h1><p>This is a new test...</p>')
})

server.listen(8888)

console.log("Server running at http://127.0.0.1:8888/")
