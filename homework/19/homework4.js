//4.Գրել ծրագիր, որը input.txt կստեղծի stream դեպի homework4.txt և
// transform միջոցով միայն այնպես անել ,
// որ միայն զույգ դիրքում գտնվող տողերը անցնեն:

const {Transform} = require('stream');
const {createReadStream, createWriteStream} = require('fs');

const tarnsStream = new Transform({
    transform(chunk, encoding, callback) {
        try{
            let rows = chunk.toString().split('\n').filter( (value, key) => !((key+1)%2) ).join('\n');
            callback(null, rows);
        } catch (e){
            console.log(e);
        }
    }
});

const readStream = createReadStream('input.txt');
const writeStream = createWriteStream('homework4.txt');

readStream.pipe(tarnsStream).pipe(writeStream).on('finish', ()=>{
    console.log('Finished!');
})