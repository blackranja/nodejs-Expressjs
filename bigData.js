var http = require('http');
var fs = require('fs');
http.createServer(
    function (req, res) {
        const text = fs.readFileSync(
            './content/big2.txt',
            'utf-8'
        )
        res.end(text);
    }
).listen(5000, () => {
    console.log("Server listening on port 5000....")
})