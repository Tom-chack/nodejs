
//4.Գրել ծրագիր, որը process.stdin միջոցով console-ից կկարդա մուտքագրված տեքստը և կգրի homework4.txt ֆայլում:
// 5 անգամ արտահայտություն մուտքագրելուց հետո  պրոցեսը պետք է ավարտվի(process.exit()):

const fs = require('fs');
const writeStream = fs.createWriteStream('homework4.txt');

let i = 0;
process.stdin.on('data', (chunk) => {
    i++;
    console.log( i + '\n' );
    if( i > 5 ){
        process.exit();
    } else {
        writeStream.write(chunk.toString());
    }
});
