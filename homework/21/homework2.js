//2. Ստեղծել էջ, որ հարցում ուղարկելիս կերևա input դաշտ ,
// որում այցելուն կհավաքի իր անունը և submit հետո
// որպես response կստանա այդ անունը(Օգտագործել GET մեթոդը):

/*
URL {
  href: 'http://localhost:8009/register/?firstName=Artyom&send=Send',
  origin: 'http://localhost:8009',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:8009',
  hostname: 'localhost',
  port: '8009',
  pathname: '/register/',
  search: '?firstName=Artyom&send=Send',
  searchParams: URLSearchParams { 'firstName' => 'Artyom', 'send' => 'Send' },
  hash: ''
}
*/

const http = require('http');

const server = http.createServer( (req, res) => {
    let url = new URL( 'http://' + req.headers.host + req.url );
    let firstName = url.searchParams.get('firstName');
    if( firstName ) {
        res.end( firstName );
    } else {
        res.end( form() );
    }
});

server.listen(8009);

function form(){
    return `<form accept="./" method="get">
            <input type="text" name="firstName" value="">
            <input type="submit" name="send" value="Send">
        </form>`;
}