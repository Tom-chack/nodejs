//2. Ստեղծել package.json  ֆայլ որը կունենա  home2.jpg տեսքը,
// որտեղ author դիմաց կլինի Ձեր անուն ազգանունը:
// homework2.js ֆայլի միջոցով օգտագործելով random փաթեթը
// console-ում արտածել 5 պատհական boolean արժեքներ(true, false):

const random = require('random');

for (let i=0; i<5; i++) console.log( random.boolean() );
