// 5.Ստեղծել էջ, որին հարցում ուղարկել երևա երեք մուտքային դաշտ՝ առաջին դաշտում այցելուն հավաքում է այն մարդու 
// էլ. հասցեն  ում ուզում է նամակ գրել, երկրորդում նամակի վերնագիրը երրորդում նամակի պարունակությունը: Submit-ից 
// հետո նամակը պետք ուղարկվի  տվյալ էլ հասցեին իսկ դաշտերի պարունակությունը պահպանվի mail.html-ում այնպես որ նախորդ 
// պահպանվածները չջնջվեն(նամակի վերնագրեր mail.html-ում պահել h1 թեգում, իսկ պարունակությունը և էլ. հասցեն տարբեր p թեգերում ): 
// Որպես respone էջում երևա sendmail callback info-ն:


const {createServer} = require('http');
const {appendFile} = require('fs');
const {IncomingForm} = require('formidable');
const {transporter} = require('./transporter');
const {isEmail} = require('validator');


const form = new IncomingForm();

createServer( (req, res) => {

    if( req.url == '/mail' && req.method.toLowerCase() == 'post'){
        
        form.parse(req, async (e, fields, files) => {

            if ( isEmail(fields.email) ){

                let html = '';

                let option = {
                    from: 'Artyom <node@profprojects.org>',
                    to: fields.email,
                    subject: fields.subject,
                    text: fields.text
                }

                html += '<h1>' + fields.subject + '</h1>\r\n';
                html += '<p>' + fields.email + '</p>\r\n';
                html += '<p>' + fields.text + '</p>\r\n';
                html += '\r\n\r\n';

                appendFile('./mail.html', html, (e) => { if(e) throw e; });

                let info = await transporter.sendMail(option);

                res.end( formView( info.response ) );

            } else {
                res.end( formView('The Email is invalid') );
            }

        });

    } else {
        res.end( formView() );
    }

}).listen(8007);


function formView( message = '' ){
    return `<div style="text-align: center">
                <div>${message}</div>
                <form action="/mail" method="POST" enctype="multipart/form-data">
                    <input type="text" name="email" placeholder="Insert the email" style="width: 300px; padding: 5px;"><br><br>
                    <input type="text" name="subject" placeholder="Insert the email subject" style="width: 300px; padding: 5px;"><br><br>
                    <textarea cols="50" rows="8" name="text" placeholder="Insert the mail text" style="width: 300px; padding: 5px;"></textarea><br><br>
                    <input type="submit" name="send" value="Send">
                </form>
            </div>`;
}