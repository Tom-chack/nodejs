//4.Գրել ծրագիր որ աշխատացնելիս  input.txt կկարդա պարունակությունը ,
// որից հետո այդ պարունակության բոլոր բացատները կփոխարին - ներով:
// Այնուհետև գծիկներով տեքստ գրել write.txt ֆայլուն

const fs = require('fs');
let data = fs.readFileSync('./files/input.txt', 'utf-8');

fs.writeFileSync( './files/write.txt', data.replace(/\s/gm, '-') );

