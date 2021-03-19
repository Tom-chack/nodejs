// 1.Գրել ծրագիր որը կստեղծի input  թեգ, որի տալ value  Ձեր անունը և ներմուծել  body-ի։

let input = document.createElement('input');
input.value = 'Artyom';
document.body.append(input);

////////////////////////////////////////////////////////
// 2.Այցելուն input դաշտում գրում է ինչ որ բան։
// Գրել ծրագիր որը կոդը բացելուց  5 վարկյան հետո  հետո կարտածի գրվածի մեջ կա @ թե ոչ։Արտածել "Yes" կամ "No":

setTimeout( () => {
    let checkResult = ( ~document.querySelector('#email').value.indexOf('@') ) ? "Yes" : "No";
    alert(checkResult);
}, 10000);


////////////////////////////////////////////////////////
// 3.Գրել կոդ , որը կստեղծի  img թեգ,
// որի src  աղբյուրի տալ որևէ նկարի հղում (օրինակ՝ http://ichef.bbci.co.uk/wwfeatures/wm/live/1600_900/images/live/p0/6n/39/p06n3975.jpg"),
// տալ width և height համապատասխանաբար 400px և 200px չափեր և ներմուծել body:

let img = document.createElement('img');
img.src = 'http://ichef.bbci.co.uk/wwfeatures/wm/live/1600_900/images/live/p0/6n/39/p06n3975.jpg';
img.width = '400';
img.height = '200';
document.body.append(img);

///////////////////////////////////////////////////////
// 4.Ունենք օբեկտ, որը ունի tagN,id,content հատկությունները։
// Այդ օբեկտից ստեղծել թեգ tagN արժեքով, տալ id-ի  id հատկության արժեքով և պարունակություն content հատկության արժեքով։
// Ստեղծել մեկնաբանություն այդ պահի ամսաթվով որ ներմուծել body, որից հետո ներմուծել թեգը։
// Օրինակ՝

let obj = {
    id:"first",
    tagN:"p",
    content:"Sunny School"
}

let comment = document.createComment( new Date() );
document.body.append(comment);

let objTag = document.createElement( obj.tagN );
objTag.id = obj.id;
objTag.innerText = obj.content;
document.body.append(objTag);

///////////////////////////////////////////////////////
// 5.Ունենք 5 անդամից կազմված զանգված։ Զանգվածից ստանալ ցուցակ և արտածել բրաուզերում (ul li)։
//  Էջը բացելուց 2 վարկյան հետո պետք է բացվի prompt պատուհանը և այցելուն մուտքագրի որևէ  արժեք։
//  Արժեքը պետք է հայտնվի արդեն բրաուզերում երևացող  ցուցակի սկզբում,
//  մուտքագրված անդամը  ավելացնել զանգվածի մեջ բայց զանգվածի սկզբից։

let list = ['Armenia', 'Gorgia', 'Russia', 'Germany', 'Italy'];

function createList( list, id = 'myList' ){
    let ul = document.getElementById(id);
    if( ul == undefined ){
        ul = document.createElement('ul');
        ul.id = id;
    } else {
        [...ul.childNodes].map( item => item.remove() );
    }
    for ( let i = 0; i < list.length; i++){
        let li = document.createElement('li');
        li.innerText = list[i];
        ul.append( li );
    }
    document.body.append(ul);
}

createList( list );

setTimeout( () => {
    let newItem = prompt();
    list.unshift(newItem);
    createList( list );
}, 2000 )