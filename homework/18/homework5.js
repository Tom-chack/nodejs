
//5.Գրել ծրագիր որ լատինատառ տեքստը որևէ մոտավորությամբ կսարքի հայատառ:
// Օրինակ ա տառը կդառնա a:
// Այդպես բոլոր տառերը: Ստեղծել readStream և
// highWaterMark: 1 նշելով բոլոր սիմվոլների վրայով անցնել:
// Ծրագիրը աշխատացնել homework5Eng.txt համար:

const {createReadStream, createWriteStream} = require('fs');
const readStream = createReadStream('homeworkEng.txt', {highWaterMark: 1});
const writeStream = createWriteStream('homeworkArm.txt');

let translate = {
    'a': 'ա',
    'b': 'բ',
    'c': 'ք',
    'n': 'ն',
    'u': 'ա',
    'y': 'ի',
    's': 'ս',
    'o': 'օ',
    'l': 'լ',
};

readStream.on('data', (chunk) => {
    let c = chunk.toString().toLowerCase();
    let s = c;
    for ( let key in translate ){
        if( c === key ){
            s = c.replace(key, translate[key]);
        }
    }
    writeStream.write(s);
    console.log(s);
})
