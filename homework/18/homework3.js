
//3.Գրել ծրագիր որը prime.txt ֆայլում կգրի մինչև 1000-ը պարզ թվերը ,
// իսկ notPrime.txt գրել այդ նույն տիրությում մնացած թվերը:

const fs = require('fs');

const writePrime = fs.createWriteStream('prime.txt');
const writeNotPrime = fs.createWriteStream('notprime.txt');

function isPrime( prime ){
    if( prime && prime != 1 ){
        for ( i =2; i <= (prime / 2); i++){
            if( !( prime % i ) ){
                return false;
                break;
            }
        }
    } else {
        return false;
    }
    return true;
}

for ( let i = 0; i < 1000; i++ ){
    if( isPrime(i) ){
        writePrime.write(`${i}\n`);
    } else {
        writeNotPrime.write(`${i}\n`);
    }
}
writePrime.end('prime.txt is finished');
writeNotPrime.end('notprime.txt is finished');
