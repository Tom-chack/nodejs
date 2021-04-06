//2. Ստեղծել event3 իրադարձությունը լսող , որը կկանչի handler : 
//Handler-ը պետք է արտածի թե քանի անգամ է այդ իրադարձությունը emit եղել:
//Երբ քանակը հասնի 3 թող այդ իրադարձությունը հեռացվի (removeListener):

const EventEmitter = require('events');

const ee = new EventEmitter();

let count = 0;

ee.on('event3', hendler);

ee.emit('event3');
ee.emit('event3');
ee.emit('event3');
ee.emit('event3');

function hendler(){
    count++;
    console.log('Called count: ', count);
    if( count >= 3 ) {
        ee.removeListener('event3', hendler);
        console.log('The event listener is removed!');
    }
}