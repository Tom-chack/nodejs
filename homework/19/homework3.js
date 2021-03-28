//3.homework2c.txt արդյունքը դեկոդավորել և պահել homework3.txt-ում:

const {createReadStream, createWriteStream} = require('fs');
const {createDecipheriv, scryptSync} = require('crypto');

const readStream = createReadStream('homework2c.txt');
const writeStream = createWriteStream('homework3.txt');

const algorithm = 'aes-256-cbc';
const password = process.version; //v14.16.0

let iv = Buffer.alloc(16,0);
let key = scryptSync(password, 'salt', 32);
const decipher = createDecipheriv(algorithm, key, iv);

readStream.pipe(decipher).pipe(writeStream).on('finish', ()=>{
    console.log('Finished!')
});

