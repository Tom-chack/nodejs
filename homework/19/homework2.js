//2. Գրել ծրագիր, որը կկոդավորի homeworks.txt և գաղտնաբառը կլինի Ձեր node versian,
// որը ավտոմատ կվերցնի process-ից:Արդյունքը պահել homework2c.txt ֆայլում:

const {createReadStream, createWriteStream} = require('fs');
const {createCipheriv, scryptSync} = require('crypto');

const readStream = createReadStream('homeworks.txt');
const writeStream = createWriteStream('homework2c.txt')

const algorithm = 'aes-256-cbc';
const password = process.version; //v14.16.0

let iv = Buffer.alloc(16,0);
let key = scryptSync(password, 'salt', 32);
const cipher = createCipheriv(algorithm, key, iv);

readStream.pipe(cipher).pipe(writeStream).on('finish', ()=>{
    console.log('Finished!')
});