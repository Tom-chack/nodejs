//4.Ունենք var WEB=['html','css','js','php'] զանգված: Գրել ծրագի որ կստեղծի զանգվածի անունով պապկա:
// Զանգվածի անդամներից այդ պապկայում ստեղծել  ֆայլեր հերթական անդամի անունով և վերջավորությունն էլ
// նույնը լինի(օրինակ html.html) պարունակություն էլ այդ անդամը:

const {mkdirSync, writeFileSync} = require('fs');

let WEB = ['html','css','js','php'];
let dir = './files';

WEB.forEach( item => {
    mkdirSync( dir + '/' + item );
    writeFileSync( dir + '/' + item  + '/' + item + '.' + item, item );
});