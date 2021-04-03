//1. response.write մեթոդով 1-ից 100 թվեր արտածել բրաուզերում երբ էջին հարցում ուղարկեն:

const http = require('http');
http.createServer( (req, res) => {
    let message = '';
    for( let i=1; i <= 100; i++ ){
       res.write(i + ' ');
    }
    res.end();
}).listen(8007);
