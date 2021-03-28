//5.Ստեղծել RemoveSpecialChars կլաս, որը ժառանգում է  Transform կլասին:
// _transform մեթոդը վերասահմանել այնպես, որ իր միջով անցնող տեքստից հեռացնել հատուկ սիմվոլները:
//
// Կլասից ստեղծել օբեկտ: homeworkr5.txt պարունակությունը pipe անել օբեկտով
// և պահապանել homeworkw5.txt ֆայլում:

const {Transform, pipeline} = require('stream');
const {createReadStream, createWriteStream} = require('fs');

class RemoveSpecialChars extends Transform{
    _transform(chunk, encoding, callback){
        try{
            let text = chunk.toString().replace(/[^a-z 0-9]/igm, '');
            callback(null, text);
        } catch (e) {
            console.log(e);
        }
    }
}

const transStream = new RemoveSpecialChars();

const readStream = createReadStream('homeworkr5.txt');
const writeStream = createWriteStream('homeworkw5.txt');

pipeline( readStream, transStream, writeStream, (err) =>{
    if( !err ) console.log('Finished!');
});
