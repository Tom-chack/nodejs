// 2. Ստեղծել readStream որը input.txt-ից կկարդա ինֆորմացիան
// 512 բայթով և կարտածի կոնսոլում յուրաքանչյուր chunk այդ chunk համարը:

const fs = require('fs');

let readStream = fs.createReadStream('input.txt', {highWaterMark: 512});

let i = 0;
readStream.on('data', (chunk) => {
    i++;
    console.log(i + ' ' +chunk + '\n\n');
});

readStream.on('end', () => {
    console.log('Finished!');
})