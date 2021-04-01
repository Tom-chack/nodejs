// 4.Server-ում ունենք sunny.txt ֆայլ: Ստեղծել էջ, որ հարցում ուղարկելիս կերևա input դաշտ ,
// որում այցելուն եթե հավաքի sunny և submit հետո որպես response ստանա sunny.txt
// պարունակությունը այլապես կրկին տեսնի input-ին դաշտը(Օգտագործել Post մեթոդը):

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
            let message = form();
            let data = query.parse( body );
            if( data.name == 'sunny' ){
                message = fs.readFileSync( './' + data.name + '.txt', 'utf8');
            }
            res.end( message );
        } else {
            res.end( form() );
        }
    });
})

server.listen(8011);

function form(){
    return `<form accept="./" method="post">
            <input type="text" name="name" value="">
            <input type="submit" name="send" value="Send">
        </form>`;
}