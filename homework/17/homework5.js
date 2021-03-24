// 5.Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների ֆայլերի պարունակությունը
// (Օրինակ homework1.js, homework2.js, homework3.js, homework4.js):
// Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի
// օպերացոն համակարգի անունից և այդ պահին ժամ րոպե վարկյանից(win32_14_14_58.txt)
// և այդ ֆայլում գրել նախորդ ֆայլերի պարունակությունը:

const os = require('os');
const fs = require('fs');
const date = new Date();
const filename = os.platform + '_' + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds() + '.txt';
fs.readdir( './', (err, files) => {
    files.forEach( file =>{
        if( file && file.match( /\.js$/i ) ){
            let content = fs.readFileSync( './' + file, 'utf-8' );
            fs.writeFileSync('./' + filename, content, { flag: "a+" });
        }
    })
})