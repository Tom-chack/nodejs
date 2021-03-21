// 4.Modules պապակայում ստեղծել wordsFromString մոդուլ wordsFromString ֆունկցիայով
// որը տրված նախադասությունից consele-ում  արտածում է այն բառերը որոնք չունեն հատուկ սիմվոլ:
// Մոդուլը ներմուծել homework4.js ֆայլում և wordsFromString ֆունկցիավ կանչել որևէ նախադասության համար:

const {wordsFromString} = require('./modules/wordsFromString');

let phrase = "Lorem ipsum 'dolor' sit 200 30% amet, $consectetur adipiscing elit, ^sed do incididunt";

wordsFromString(phrase);