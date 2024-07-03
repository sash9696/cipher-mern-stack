var http = require('http');
var url = require('url');
// console.log(http);

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('Hello world');
    var q = url.parse(req.url, true).query;
    console.log(q)
    // res.write(req.url);

    res.end(`the params are: ` + JSON.stringify(q));
}).listen(8080);