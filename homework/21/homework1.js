//1.  Գրել ծրագիր, որը կստուգի , եթե req.url /sunny է, ապա console-ում տպի Yes.
/*
URL {
  href: 'http://localhost:8007/sunny/?a=1&b=5',
  origin: 'http://localhost:8007',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:8007',
  hostname: 'localhost',
  port: '8007',
  pathname: '/sunny/',
  search: '?a=1&b=5',
  searchParams: URLSearchParams { 'a' => '1', 'b' => '5' },
  hash: ''
}
*/

const http = require('http');

const server = http.createServer( (req, res) => {
    let message = 'No';
    let url = new URL( 'http://' + req.headers.host + req.url );
    if( url.pathname.replace(/\//g, '') == 'sunny'){
        message = 'Yes';
    }
    res.end(message);
});

server.listen(8007);