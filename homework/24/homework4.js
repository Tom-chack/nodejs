// 4.Ստեղծել էջ, որին հարցում ուղարկել երևա մեկ մուտքային դաշտ՝ այցելուն հավաքում է այն մարդու 
// էլ. հասցեն  ում ուզում է նամակ գրել: Submit-ից հետո ստուգել, եթե էլ. հասցեն համապատասխանում է չափանիշներին  
// նամակը պետք ուղարկվի  տվայլ էլ հասցեին կցելով այդ պապկայաում գտնվող sunny.jpg նկարը այլապես եթե էլ, 
// հասցնե սխալէ էջի վերևում որպես response երևա Email is not valid տեքստը և մուտքային դաշտը կրկին էլ. հասցե հավաքելու համար: 
// Որպես respone էջում երևա sendmail callback info-ն:

const {createServer} = require('http');
const {createReadStream} = require('fs');
const {IncomingForm} = require('formidable');
const {transporter} = require('./transporter');
const {isEmail} = require('validator');


const form = new IncomingForm();

createServer( (req, res) => {

    if( req.url == '/mail' && req.method.toLowerCase() == 'post'){
        
        form.parse(req, async (e, fields, files) => {

            if ( isEmail( fields.email ) ){

                let option = {
                    from: 'Artyom <node@profprojects.org>',
                    to: fields.email,
                    subject: 'Homework 24.4',
                    attachments: [
                        {
                            filename: 'sunny.jpg',
                            content: createReadStream( './sunny.jpg' ),
                        }
                    ]
                }

                let info = await transporter.sendMail(option);

                res.end( formView( info.response ) );

            } else {
                res.end( formView('Email is not valid') );
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
                    <input type="submit" name="send" value="Send">
                </form>
            </div>`;
}