//1. homeworks.txt.gz ֆայլը unzip անել և պահապնել homework1.txt-ում:

const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('homeworks.txt.gz');
const unzip = zlib.createGunzip();
const writeStream = fs.createWriteStream('homework1.txt');

readStream.pipe(unzip).pipe(writeStream).on('finish', () => {
    console.log('Finished!');
})