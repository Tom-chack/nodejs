//1.  Գրել ծրագիր որը աշխատացնելիս console-ում կարտածի ամբողջ օպերատիվ հիշողության:

let os = require('os');
let prettyBytes = require('pretty-bytes');

console.log( 'Total Memory: ' + prettyBytes( os.totalmem() ) );
console.log( 'Free Memory: ' + prettyBytes( os.freemem() ) );

console.log( 'Used Memory: ' + prettyBytes(os.totalmem() - os.freemem()) );