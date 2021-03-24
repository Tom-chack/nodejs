//3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված
// անուն ունեցող txt ֆայլ և այդ ֆայի մեջ Օպերացիան համակարգի central processing unit (CPU)
// քանակը(os.cpus()):

const os = require('os');
const fs = require('fs');
const rand = require('random');

let data = os.cpus().length.toString();

console.log(data);

let filename = rand.int(1e7,9e7) + '.txt';

fs.writeFileSync('./files/' + filename, data);
