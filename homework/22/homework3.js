// 3.Ստեղծել էջ, որ հարցում ուղարկելիս կերևա input դաշտ անվան համար ,   
// որում այցելուն կհավաքի տեքստ: submit-ից հետո ստուգել եթե հավաքել է 
// form բառը ապա որպես response ստանա form.html պարունակությունը՝ որպես html:


const fs = require('fs');
const http = require('http');


http.createServer( (req, res) => {

    let url = new URL( 'http://' + req.headers.host + req.url );
    let text = url.searchParams.get('text');

    if( text == 'form' ){
        res.setHeader('Content-Type', 'text/html');
        let readStream = fs.createReadStream('./form.html');
        readStream.pipe(res);
    } else{
        res.end(form());
    }
}).listen(8007);

function form(){
    return `<form accept="./" method="get">
                <input type="text" name="text" value="">
                <input type="submit" name="send" value="Send">
            </form>`;
}