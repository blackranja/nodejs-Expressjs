const http = require('http');
const server = http.createServer((req, res) => {
    res.write('Welcome to our Home Page');
    res.end();

})
server.listen(5000);