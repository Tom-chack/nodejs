// 3.Ստեղծել էջ, որ հարցում ուղարկելիս կերևա input դաշտ ,
// որում այցելուն կհավաքի բառ և submit հետո որպես response ստանա done բառը:
// Սերվերում կա homework3.txt ֆայլ, rename անել այն անունով ,
// որը ուղարկվել է սերվեր (Օգտագործել Post մեթոդը):

const fs = require('fs');
const http = require('http');
const query = require('querystring');

const server = http.createServer( (req, res) => {

    req.on('data', chunk => {
        let data = query.parse( chunk.toString() );
        fs.rename('./homework3.txt', './' + encodeURIComponent( data.name.trim() ) + '.txt', (e) => { if(e) console.log(e) } );
        res.end( 'Done!' );
            });
    req.on('end', () => {
        res.end( form() );
    });

});

server.listen(8010);

function form(){
    return `<form accept="./" method="post">
            <input type="text" name="name" value="">
            <input type="submit" name="send" value="Send">
        </form>`;
}