//2. Ստեղծել multiple իրադարձությունը լսող , որը կկանչի handler :
// Handler-ը պետք է հաշվի տրված արգումենտի քառակուսին: emit անել 
// multiple և որպես արգումնտ տալ նաև որևէ թիվ (Օրինակ՝ emit('multiple', 8)):

const EventEmitter = require('events');

let eventEmitter = new EventEmitter();

eventEmitter.on('multiple', ( num ) =>{
    console.log( num**2 );
} );


setTimeout(()=>{
    eventEmitter.emit('multiple', 8);
}, 1000);