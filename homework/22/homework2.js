//2. Ստեղծել էջ, որին /img route-ով հարցում ուղարկելիս sunny.jpg երևա, այլ route ուղարեկլիս 404 երևա:

const fs = require('fs');
const http = require('http');


http.createServer( (req, res) => {
    if(req.url == '/img'){
        res.setHeader('Content-Type', 'image/jpeg');
        let readStream = fs.createReadStream('./sunny.jpg');
        readStream.pipe(res);
    } else{
        res.statusCode = 404;
        res.end('Not Found!');
    }
}).listen(8007);