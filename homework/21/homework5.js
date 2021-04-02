//5.Ստեղծել էջ, որ հարցում ուղարկելիս կերևա input դաշտ անվան համար և textarea  տեքստի համար,
// որոնցում այցելուն կհավաքի անուն և  տեքստ : submit-ից հետո որպես response ստանա կրկին նույն դաշտերը ,
// իսկ ուղարկված անունով ստեղծել txt ֆայլ Homework5(ստեղծել պապկան) պապկայում,
// իսկ մեջը գրվի տեքստային դաշտի պարունակությունը(Օգտագործել Get մեթոդը):

const fs = require('fs');
const http = require('http');

const server = http.createServer( (req, res) => {
    
    let dir = './Homework5';

    let url = new URL( 'http://' + req.headers.host + req.url );
    let query = url.searchParams;

    if( req.method == 'GET' && query.get('name') ){

        let filename = query.get('name');
        let content = query.get('text');

        let filepath = dir + '/' + filename + '.txt';

        try{
            fs.accessSync(dir);
        } catch (e) {
            fs.mkdirSync(dir);
        }

        try{
            fs.accessSync(filepath);
        } catch (e) {
            fs.writeFileSync(filepath, content.toString());
        }

        res.end( form('Thank you!') );

    } else {
        res.end( form() );
    }

})

server.listen(8012);


function form( message = '' ){
    return `<div style="text-align: center">
                <p>${message}</p>
                <form accept="./" method="get">
                    <input type="text" name="name" placeholder="Insert the file name" style="width: 300px; padding: 5px;"><br><br>
                    <textarea cols="50" rows="8" placeholder="Insert the file content" name="text" style="width: 300px; padding: 5px;"></textarea><br>
                    <input type="submit" name="send" value="Send">
                </form>
            </div>`;
}