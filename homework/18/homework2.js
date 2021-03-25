//2. Ստեղծել readStream որը input.txt-ից կկարդա ինֆորմացիան 1024բայթով
//և կաևտածի կոնսոլում այն chunk-երը , որոնք հատուկ սիմվոլներ չունեն:

const fs = require('fs');

let readStream = fs.createReadStream('input.txt', {highWaterMark: 1024});

i = 0;
readStream.on('data', (chunk) => {
    i++;
    if( !chunk.toString().match(/[^a-z 0-9]/igm) ) {
        console.log( 'Chunk #' + i + '\n' + chunk + '\n\n' );
    }
})

readStream.on('end', () => {
    console.log('Finished!');
})