//1.  Ստեղծել write stream homework1.txt անունով ,
// որի մեջ գրեք այդ պահի ամսաթիվը և process.versions ինֆորմացիան այդ ֆայլում:

const {createWriteStream} = require('fs');

let ws = createWriteStream('homework1.txt');

ws.write( JSON.stringify( process.versions, false, '\n' ) );

ws.end();