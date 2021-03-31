// 2. Գրել ծրագիր որ նախորդ առաջադրանքի կողմից ստեղծված ֆայլ կանվանափոխի այդ պահի ամիս, օր,
// ժամ, րոպեով, վայրկյանով (Օրինակ 10_11_15_32_13.txt):

const {renameSync, accessSync} = require('fs');
let d = new Date();

let source = './files/DELL.txt';
let target = './' + d.getDate() + '_' + d.getDay() + '_' + d.getHours() + '_' + d.getMinutes() + '_' + d.getSeconds() + '.txt';

try{
    accessSync(source);
    renameSync(source, target);
} catch (e){
    console.log(e.message);
}



