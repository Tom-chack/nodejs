// 4.Գրել ծրագիր, որը process.stdin միջոցով console-ից կկարդա մուտքագրված
// տեքստը և հաջորդ տողում կարտածի մուտքագրված արտահայտության երկարությունը:
// finish բառի դեպքում պրոցեսը պետք է ավարտվի(process.exit()):

process.stdin.on('data', (chunk) => {
    let phrase = chunk.toString().trim();
    if( phrase == 'finish' ) process.exit();
    console.log( phrase.length );
});