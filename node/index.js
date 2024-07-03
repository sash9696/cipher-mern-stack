//inbuilt modules
//custom modules

var http = require('http');
var dt = require('./module');
// console.log(http);

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('Hello world');

    res.write(`The date and time is currently: ${dt.myDateTime()}`);
    res.end();
}).listen(8080);


//node => js + libuv +  c++

//modules

