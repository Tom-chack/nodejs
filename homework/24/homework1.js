//1. Գրել ծրագիր , որը աշխատացնելիս homeworks.txt պարունակությունը, որպես նամակ gevorgabgaryannode@gmail.com էլ. հասցեին:

const {createReadStream} = require('fs');
const {transporter} = require('./transporter.js');

async function mail(){

    let readStream = createReadStream('./homeworks.txt', { encoding: 'utf-8' });

    let options = {
        from: 'Artyom Chakhoyan <node@profprojects.org>',
        to: 'gevorgabgaryannode@gmail.com',
        subject: 'Homework 24.1',
        text: readStream
    }

    let info = await transporter.sendMail( options );

    console.log(info.messageId);

}

mail();