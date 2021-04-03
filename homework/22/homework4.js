// 4.Ստեղծել էջ, որ հարցում ուղարկելիս կերևա input դաշտ անվան համար և textarea  տեքստի համար,   
// որոնցում այցելուն կհավաքի անուն և  տեքստ : submit-ից հետո որպես response ստանա իր հավաքած 
// ինֆորմացիան դաշտերի name հետ որպես JSON response (օգտագործել GET մեթոդը):

const fs = require('fs');
const http = require('http');

http.createServer( (req, res) => {

    let url = new URL( 'http://' + req.headers.host + req.url );
    let name = url.searchParams.get('name');

    if( name ){
        res.setHeader('Content-Type', 'application/json');
        let queryObject = Object.fromEntries( url.searchParams.entries() );
        let json = JSON.stringify( queryObject );
        res.end(json);
    } else{
        res.end(form());
    }
}).listen(8007);

function form(){
    return `<div style="text-align: center">
                <form accept="./" method="get">
                    <input type="text" name="name" placeholder="Insert the name" style="width: 300px; padding: 5px;"><br><br>
                    <textarea cols="50" rows="8" name="text" placeholder="Insert the text" style="width: 300px; padding: 5px;"></textarea><br>
                    <input type="submit" name="send" value="Send">
                </form>
            </div>`;
}