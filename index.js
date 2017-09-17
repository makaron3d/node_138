var fs = require("fs"),
    http = require('http'),
    server = http.createServer(),
    pic = "./404.jpg",
    file = "./index.html";

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/index@') {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.write('<h1>Hello World!</h1>');
        fs.readFile(file, function (err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    } else {
        response.setHeader("Content-Type", "image/jpg");
        response.statusCode = 404;
        fs.readFile(pic, function (err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    }
});

server.listen(8110);
