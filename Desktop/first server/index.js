console.log("welcome to my Node.js server!");

const http = require("http");

const server = http.createServer((req,res) =>{
    res.writeHead(200, {'content-type':"text/plain"});  
    res.end(("Hello server!"));
})

const PORT = 3000;
server.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})
