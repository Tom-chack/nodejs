// 3.Ստեղծել էջ, որ հարցում ուղարկելիս կերևա input դաշտ ,
// որում այցելուն կհավաքի բառ և submit հետո որպես response ստանա done բառը:
// Սերվերում կա homework3.txt ֆայլ, rename անել այն անունով ,
// որը ուղարկվել է սերվեր (Օգտագործել Post մեթոդը):

const fs = require('fs');
const http = require('http');
const query = require('querystring');

const server = http.createServer( (req, res) => {

    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        if( req.method == 'POST' ){
            let data = query.parse( body );
            let source = './homework3.txt';
            let target = './' + data.name.trim().replace(/[^a-z0-9]/gi, '_') + '.txt';
            fs.renameSync(source, target);
            res.end( 'Done!' );
        } else {
            res.end( form() );
        }
    });

});

server.listen(8010);

function form(){
    return `<form accept="./" method="post">
            <input type="text" name="name" value="">
            <input type="submit" name="send" value="Send">
        </form>`;
}