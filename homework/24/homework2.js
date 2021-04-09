// 2.  Գրել ծրագիր , որը աշխատացնելիս կստուգի եթե ժամը  լինի 12-13 տիրությում ապա    
// gevorgabgaryannode@gmail.com էլ. հասցեին նամակ ուղարկի New Article պարունակությամբ:

const {transporter} = require('./transporter');

async function mailer(){

    let options = {
        from: 'Artyom <node@profprojects.org>',
        to: 'gevorgabgaryannode@gmail.com',
        subject: 'Homework 24.2',
        html: '<h3>New Article</h3>'
    }

    let info = await transporter.sendMail(options);

    console.log(info.messageId);

}

setInterval( () => {
    let date = new Date();
    if( date.getHours() == 14 ){
        mailer().catch( e => console.log(e) );
    }
}, 5000);