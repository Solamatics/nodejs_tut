const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end(`Welcome to our homepage`);
    }
    if(req.url === '/about') {
        res.end(`We offer software solutions`)
    } else {
        res.end(`
        <h1>Page does not exist</h1> 
        <a href="/">Back home</a>
    `)
    }
    
})


server.listen(5000)