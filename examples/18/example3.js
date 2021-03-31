// 3.Գրել ծրագիր որը multiple4or5.txt ֆայլում կգրի մինչև 1000-ը 4 կամ 5 բաժանվող թվերը, իսկ multiple7and9.txt
// գրել այդ նույն տիրությում միաժամանակ 7 և 9 վրա բաժանվող թվերը:

const {createWriteStream} = require('fs');

let writeStream_4_5 =  createWriteStream('multiple4or5.txt');
let writeStream_7_9 =  createWriteStream('multiple7and9.txt');

for( let i = 0; i < 1000; i++ ){
    if( i%4 == 0 || i%5 == 0 ){
        writeStream_4_5.write(`${i}\n`);
    }
}
writeStream_4_5.end();

for( let i = 0; i < 1000; i++ ){
    if( !(i%7) || !(i%9) ){
        writeStream_7_9.write(`${i}\n`);
    }
}
writeStream_7_9.end();