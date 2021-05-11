const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === "/")   {
        res.end('Welcome to our home');
    }
    if(req.url === "/about")  {
        res.end('Welcome to our about page');
    }
    res.end(`
    <h1>Oops! Cannot find the page you were looking for. </h1>
    <a href="/"> Back home? </a>
    `)
})

server.listen(3000);