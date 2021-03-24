//1.  Ստեղծել write stream example1.txt անունով ,
// որի մեջ գրեք Ձեր անուն ազգանունը և end
// մեթոդով նաև գրեք Ձեր անուն ազգանունի երկարությունը այդ ֆայլում:

const fs = require('fs');
let name = 'Artyom Chakhoyan';
const writeStream = fs.createWriteStream('example1.txt');
writeStream.write(name);

writeStream.end(name.length.toString());