//1.  Ստեղծել ծրագիր, որը կարտածի այդ պահին ժամը և րոպեն, երբ emit լինի time իրադարձությունը(ստեղծել 
// այդ իրադարձությունը լսող և handler որը կարտածի ժամը և րոպեն):

const EventEmitter = require('events');

let eventEmitter = new EventEmitter();

eventEmitter.on('time', displayTime);


function displayTime(){
    let time = new Date()
    console.log( time.getHours() + ' : ' + time.getMinutes() );
}

setTimeout(()=>{
    eventEmitter.emit('time');
}, 2000);

setTimeout(()=>{
    eventEmitter.emit('time');
}, 1000);