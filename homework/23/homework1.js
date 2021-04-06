//1.  Ստեղծել Homework իրադարձությունը լսող , որը կկանչի handler :
//Handler-ը պետք է արտածի Homeworks.txt պարունակությունը: emit անել Homework :

const fs = require('fs');
const EventEmmiter = require('events');

const ee = new EventEmmiter();

ee.on('homework', ()=>{
    fs.open('./homeworks.txt', 'r', (e, fd) => {
        if(e){
            console.log(e.message);
        } else {
            let text = fs.readFileSync(fd, 'utf-8');
            console.log(text);
        }
    })
});

ee.emit('homework');