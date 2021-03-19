// 1.Ստեղծել ֆունկցիա, որը որպես պարամետր ընդունում է կամայական քանակությամբ թվեր
// և ստեղծում է մի նոր զանգված իրեն փոխանցած այն արգումենտներից, որոնք պարունակում են զրո թվանշան:

function zeroArray(){
    return Array.from(arguments).filter( a => ~a.toString().indexOf('0') );
}

console.log( zeroArray(1, 20, 502, 600, 54, 90) );

///////////////////////////////////////////
// 2.Ունենք զանգված : Կլոնավորել այդ զանգվածը այնպես,
// որ նոր զանգվածին անդամ ավելացնենք հինը չփոխվի(spread operator):

let a = [1,2,3,4,5];
let b = [...a];
b[5] = 500;
console.log(a);
console.log(b);


//////////////////////////////////////////
// 3.Ունենք user օբեկտներ կազմված անունից օնլայնի ստատուսից որը կամ true կամ false:
// Ստեղծել Set որում կլինի այդ պահին օնլայն true ունեցող user-ներից, որից հետո արտածել օնլայների ցուցակը:
//     Օրինակ՝
let user1 = {
 name: 'Sveta',
 online: true
}

let user2 = {
    name: 'Sunny',
    online: true
}

let user3 = {
    name: 'Suzanne',
    online: false
}

let users = [user1, user2, user3];
let onlineUsers = new Set();
for ( let user of users ){
    if( user.online ) onlineUsers.add(user);
}

[...onlineUsers.values()].forEach( a => document.write(a.name + '<br>') );

////////////////////////////////////////////////
// 4.Ունենք messages զանգված , որտեղ կան օբեկտներ : Օբեկտները ունեն text և from հատկություններ,
// որոնք պարուանկում են նամակի տեքստ և ումից է այն ստացվել:
//
// Ստեղծել Map և  նամակների օբեկտներին տալ կարդալու ամսաթիվ (օբյեկտները key-եր են),
// ընդ որում կա տարբեր ամսաթվեր (new Date(2020,1,1)):
// Այնուհետև արտածել այն նամակների հեղինակներին որոնց տարեթիվ 2018 և ավելի հետո է:
//
//  Օրինակ՝
let messageMap = new Map();
let messages = [
    {text: "Hello", from: "Sunny"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let dates = [new Date(2017,2,25), new Date(2018,2,25), new Date(2019,2,25)];

for( let key in messages ){
    messageMap.set( messages[key], dates[key] );
}

for( let item of messageMap.keys() ){
    if( messageMap.get( item ).getFullYear() >= 2018 ){
        console.log( item.from );
    }
}


////////////////////////////////////////////////
// 5.Ստեղծել Promise որի մեջ  կա ցիկլը որ սկսվում է զրոյից և հաշվում հերթական i i աստիճանը:
// Թող ցիկլ ընդհատվի 1 վայկյան աշխատելուց հետո :
// Եթե ցիկլը ընդհատվի 10 միլիոնից մեծ թվի վրա ապա resolve ուղարկել ՙՙկատարվել է՞՞ բառը և այն i որի վրա ընդհատվել է, այլապես reject-ով ՙՙչի կատարվել՞՞ բառը և այն i որի վրա ընդհատվել է:Promise իրականացնելուց հետո անկախ արդյունքից  արտածել ՙՙկատարվել՞՞ բառը , որից հետո արտածել արդյունքը (finally, then):
//
let promise = new Promise( (resolve, reject) => {
    let start = Date.now();
    for ( var i = 1; ; i++ ){
        let a = i ** i;
        let end = Date.now();
        if( end - start > 1000 ){
            break;
        }
    }

    if ( i > 1e7 ){
        resolve( 'Has done! i = ' + i );
    } else {
        reject('Hasn\'t managed to do i = ' + i );
    }
}).then(
    result => alert(result),
    error => alert(error)
).finally( () => alert('Has done somehow') );

