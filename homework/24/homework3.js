// 3.Ստեղծել էջ, որին հարցում ուղարկել երևա երեք մուտքային դաշտ՝ առաջին դաշտում այցելուն հավաքում է այն մարդու 
// էլ. հասցեն  ում ուզում է նամակ գրել, երկրորդում նամակի վերանագիրը երրորդում կցում է ֆայլ: Submit-ից հետո ստուգել 
// եթե ֆայլի extension txt է, ապա նամակը պետք ուղարկվի  տվայլ էլ հասցեին կցված ֆայլի հետ միասին, այլապես կրկին երևա մուտքային դաշտերը: 
// Որպես respone էջում երևա sendmail callback info-ն:

const {createServer} = require('http');
const {createReadStream} = require('fs');
const {IncomingForm} = require('formidable');
const {transporter} = require('./transporter');


const form = new IncomingForm();

createServer( (req, res) => {

    if( req.url == '/mail' && req.method.toLowerCase() == 'post'){
        
        form.parse(req, async (e, fields, files) => {

            if ( files.attachment.type == 'text/plain' ){

                formEmail = fields.email;
                formSubject = fields.subject;
                formText = fields.text;

                let option = {
                    from: 'Artyom <node@profprojects.org>',
                    to: formEmail,
                    subject: formSubject,
                    text: formText,
                    attachments: [
                        {
                            filename: files.attachment.name,
                            content: createReadStream( files.attachment.path ),
                            ontentType: 'text/plain'
                        }
                    ]
                }

                let info = await transporter.sendMail(option);

                res.end( formView( info.response ) );

            } else {
                res.end( formView('The attached file format must be .txt') );
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
                    <input type="file" name="attachment">
                    <input type="submit" name="send" value="Send">
                </form>
            </div>`;
}