// 5.Գրել կոդ , Homework11 database-ում  կստեղծի tableArticles անունով աղյուսակ, որ կա հետևյալ դաշտերը՝ id, 
// title,description,content  դաշտերով: Ստեղծել input-ներ, որով այցելուն տվյալներ կտա  այդ դաշտերին, 
// որից հետո այդ տվյալները պահապնել դատաբազայում  միաժամանակ արտածելով դատաբազայի այդ աղյուսակի պարունակությունը input դաշտերի ներքևում,
// այսինք մեկնաբանության նման երբ գրում հաստատում ես անմիջապես հայտնվում է : 


const {db} = require('./mysql.con.db.js');
const {createServer} = require('http');
const {IncomingForm} = require('formidable');

const form = new IncomingForm();

let sql_create = `CREATE TABLE IF NOT EXISTS tableArticles (
                    id INT(11) NOT NULL AUTO_INCREMENT,
                    title VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                    description TEXT COLLATE utf8mb4_unicode_ci NOT NULL,
                    content LONGTEXT COLLATE utf8mb4_unicode_ci NOT NULL,
                    PRIMARY KEY (id)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

createServer( (req, res) => {

    if(req.url == '/save'){

        form.parse(req, (e, fields) => {

            if(e) throw e;
            
            db.query( sql_create, (e) => { if(e) throw e.message;  });

            let title = db.escape(fields.title);
            let description = db.escape(fields.description);
            let filename = db.escape(fields.content);

            let sql = `INSERT INTO tableArticles (title, description, content)  VALUES (${title}, ${description}, ${filename})`;

            db.query( sql, (e, results) => {
                if(e) throw e;
                let html = `${results.insertId}, ${title}, ${description}, ${filename}`;
                res.end( formView('Inserted successfully!', html) );
            });
        });
    } else {
        res.end(formView());
    }


}).listen(8007);

function formView( message = '', data = '' ){
    return `<div style="text-align: center">
                <div>${message}</div>
                <form action="/save" method="POST">
                    <input type="text" name="title" placeholder="Title..." style="width: 300px; padding: 5px;"><br><br>
                    <input type="text" name="description" placeholder="Description..." style="width: 300px; padding: 5px;"><br><br>
                    <textarea cols="50" rows="8" name="content" placeholder="Content..." style="width: 300px; padding: 5px;"></textarea><br><br>
                    <input type="submit" name="send" value="Send">
                </form>
                <br><br>
                <div>${data}</div>
            </div>`;
}