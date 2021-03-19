// 1.Alert-ով արտածել  <<text>> class-ին մոտակա  <<main>> class-ի հաջորդ Node-ը: Home1.jpg-ում է:

let x = document.getElementsByClassName('text')[0].closest('.main').nextSibling;

alert(x);

//////////////////////////////////////////////////
// 2.Ունենք էջ , որում կա p  թեգեր:
// Ստանալ զանգված որում հավաքված կլինի p թեգերի պարունակությունները և արտածել այդ զանգվածը:

let p = document.getElementsByTagName('p');
let childElements = [];
for( item of p ){
    if( item.children.length ){
        childElements = childElements.concat([...item.children]);
    }
}
console.log(childElements);


/////////////////////////////////////////////////
// 3.Ունենք վեբ էջ :
// Ստուգել արդյոք այդ body-ի մեջ գտնվող թեգերում  կա <<SUNNY SCHOOL>> բառը
// և արտածել այն թեգերի անուները որում այդ արտահայտությունը  կա:

for( let tag of document.body.children ){
   if( tag.textContent.match(/SUNNY SCHOOL/i) ) {
       console.log( tag.tagName );
   }
}

/////////////////////////////////////////////////
// 4.Ունենք 7 տողանոց և 7 սյունյականոց  աղյուսակ, որի բոլոր բջիջներում գրված է cell:
// Գրել կոդ , որը  անկյունագծի cell փոխարինի թվերով ինչպես Home4.jpg-ում է:

let table = document.createElement('table');
table.border = 1;
table.width = 300;

for (let i = 0; i < 7; i++){
    let tr = table.insertRow();
    for (let v = 0; v < 7; v++){
        let td = tr.insertCell();
        if( v == (6-i) ){
            td.innerText = v;
        } else{
            td.innerText = 'cell';
        }
    }
}

document.body.append(table);

/////////////////////////////////////////////////
// 5.Այցելուն prompt պատուհանով մուտքագրում է տեքստ:
// Տեքստից հեռացնել հատուկ սիմվոլները և արտածել նոր տեքստ p թեգում (թեգը html էջի միակ p թեգն է):
// Տեքստի հատուկ սիմվոլներից ստանալ զանգված և այն արտածել console-ում:

let phrase = prompt();

text = phrase.replace(/\W/g, '');
document.getElementsByTagName('p')[0].innerText = text;

symbols = [...phrase.replace(/\w/g, '')];
console.log( symbols );