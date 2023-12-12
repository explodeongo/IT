const http = require('http');

const server = http.createServer((req, res) => {
    // Set the content type of the response
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', '20');

    // Send the response
    res.end('Hello world, This is my Node.js server\n');
});

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
