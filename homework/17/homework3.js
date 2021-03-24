//3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված
// անուն ունեցող txt ֆայլ և այդ ֆայի մեջ Օպերացիան համակարգի central processing unit (CPU)
// քանակը(os.cpus()):

const os = require('os');
const fs = require('fs');
const rand = require('random');

let data = os.cpus.length.toString();
let filename = rand.int(1e8,9e8);

fs.writeFileSync('./files/' + filename, data);
