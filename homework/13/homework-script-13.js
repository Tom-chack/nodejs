// 1.Ունենք էջ որում կան form՝ input-ներով: Երբ միաժամանակ սեղմենք Ctrl և m պետք է form անհետանա
// և հայտնվի հետևյալ տեքստը՝ Thanks for message.

document.documentElement.addEventListener('keydown', e => {
    if( e.code == 'KeyM' & (e.ctrlKey || e.metaKey) ){
        form.innerHTML = "Thanks for message";
    }
});


/////////////////////////////////////////////////////
// 2.Ունենք input : Գրել ծրագիր , որ այցելուին թույլ չի տա  այդ input գրել N կամ  n տառերը
// և այդ տառերը գրելիս alert կանի արգելված է:

input.addEventListener('keydown', e => {
    if( e.code == 'KeyN' ){
        e.preventDefault();
        alert('The letter N is forbidden');
    }
});

/////////////////////////////////////////////////////
// 3.Ունենք էջում հ1, button, p թեգեր:
// Ստեղծել ծրագի որ եթե այս էլեմենտներին սեղմենք ստեղծի օբեկտ որը մեջ լինի երեք հատկություն ,
// որի վրա կպահպանվի իրադարձության հետևյալ տվյալները՝
// event.target.tagName, event.clientX, event.clientY:
// Ստեղծված օբեկտները հավաքել զանգվածում և
// էջը բացելուց 10 վարկյան հետո console արտածել սեղմված էլեմնետների ցանկը:

let eventArray = [];
document.addEventListener('click', e => {
    if( e.target.tagName == 'H1' || e.target.tagName == 'BUTTON' || e.target.tagName == 'P'){
        eventArray.push({
            tagName: e.target.tagName,
            clientX: e.clientX,
            clientY: e.clientY
        })
    }
});

setTimeout(() => console.log(eventArray), 10000 );


/////////////////////////////////////////////////////
// 4.Ունենք գաղտնաբառի input: Ստեղծել գաղտնաբառի ամրությունը ստուգող ֆունկցիա:
// Երբ այցելուն input սկսում մուտքագրել և սիմվոլների քանակը 3-ից քիչ է ,
// ապա input հարևանությամբ գրի weak բառը: Երբ սիմվոլների քանակը 3-ից մեծ է
// input-ի հարևանությամբ գրվի normal բառը, իսկ երբ մուտքագրվի ! կամ @  սիմվոլները
// input-ի հարևանությմաբ գրվի strong բառը, որից հետ այլևս հնարավոր չլինի սիմվոլ գրել:

// HTML ------------------------------------------------------------------
/*
    <input id="input" name="" value="" type="text">
    <span id="info"></span>
*/

input.addEventListener('keydown', e => {
    let info = document.getElementById('info');
    if( e.target.value.length <= 3 ){
        info.innerText = 'weak';
    } else if( e.target.value.length > 3 && e.key.match(/[@!]/) ) {
        //Changes info to "strong" when @ or ! is pressed
        info.innerText = 'strong';
    } else if( e.target.value.length > 3 && e.target.value.match(/[@!]/) ){
        if( e.key.match(/^.$/u) ) {
            e.preventDefault();
        } else {
            //Changes info to "normal" when you delete @ or !
            info.innerText = 'normal';
        }
    } else{
        info.innerText = 'normal';
    }
})

////////////////////////////////////////////////////
// 5.Ստեղծել հայաստանյան հեռախոսահամարները ստուգող ֆունկցիա, որը առաջին նիշ կթողի գրել միայն 0:
// 0 գրելուց հետե կբացվի հայաստանյան օպերատորների հեռախոսհամարների կոդերի ցանկը
// (Օրինակ 91,93,94,95,98,99,77,55) և այցելուն չի կարողանա երկրոդ սիմվոլը գրել input-ում
// կսեղմի ցանկից իրեն ցանկալի կոդը որը կհայտնվի input-ում:
// Որից հետո կկարողանա գրել միայն 6 թվանշան, այլ սիմվոլ պետք է չկարողանա գրել:
// Ցանկալի գրածը կարողանա ջնջել:

// HTML --------------------------------------------
/*
<input id="phone" name="" value="" type="text">
<ul id="codes"></ul>
*/

codes.hidden = true;
codes.innerHTML = [91,93,94,95,98,99,77,55].map( code => '<li>' + code + '</li>' ).join('');
[...codes.children].forEach( li => li.style.cursor = 'pointer' );

phone.addEventListener('keydown', e => {
    if( e.target.value.length == 0 && e.key == '0' ){
        codes.hidden = false;
    } else if( e.target.value.length > 2 ){
        if( !/\d/.test(e.key) ){
            if( e.key.match(/^.$/u) ) e.preventDefault();
        } else if ( e.target.value.length > 8 ){
            e.preventDefault();
        }
    } else if( e.key.match(/^.$/u) ){
        e.preventDefault();
    } else {
        codes.hidden = true;
    }
});

codes.addEventListener('click', e => {
    if( e.target.tagName == 'LI' ){
        phone.value += e.target.innerText;
        codes.hidden = true;
    }
});