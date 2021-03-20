// 1.Ունենք input և buttօn:
// Ստեղծել buttօn click իրադարձությունը լսող, որ կլիկի ժամանակ կկանչի handler:
// handler-ը պետք է ստուգի input գրված տեքստը պարունակում է @ և . :
// Եթե պարունակում է թող alert անի yes այլապես no:

document.getElementById('button').addEventListener('click', e => {
    let regexp = /[@\.]/;
    let input = document.getElementById('input');
    alert( ( regexp.test(input.value) ) ? 'Yes' : 'No' );
});

////////////////////////////////////////////////////
// 2.Ունենք էջ որտեղ հնարավոր է 3000px scroll անել:
// Գրել ծրագիր որ թույլ կտա կոճակ սեղմել և իմանալ թե այցելուն մաքսիմում որքան է scroll արել
// (պրակտիկայում սա կարող է պետք է գալ գովազդատուների որպեսզի իմանան կայքի չերևացող մասում դրված գովազդը դիտում են թե ոչ):
// <style type="text/css">
// body{
//      height: 500vh
// }
// </style>

let maxScrollHeight = 0;

document.addEventListener('scroll', e => {
    if( window.pageYOffset > maxScrollHeight ){
        maxScrollHeight = window.pageYOffset.toFixed();
    }
});

scrollButton.onclick = function (){
    alert( 'The max scrolled height was: ' + maxScrollHeight );
}

///////////////////////////////////////////////////
// 3.Էջում կա input և p թեգեր: Գրել ծրագիր որ input գրածը անմիջապես կհայտնվի p թեգում,
// ընդ որում եթե p թեգի պարունակությունը 4 սիմվոլից կարճ է ապա տեքստ կարմիր գույն լինի այլապես կանաչ գույն լինի:

input.addEventListener('input', (e) => {
   if( e.target.value.length < 4 ){
       e.target.style.color = '#ff0000';
   } else{
       e.target.style.color = 'inherit';
   }
   p.innerText = e.target.value;
});


//////////////////////////////////////////////////
// 4.Ունենք երկու input, որոնցից երկրորդը չի երևում:
// Գրել ծրագիր որ երբ առաջին input 6 սիմվոլից ավելի լինի երկրորդ input երևա, իսկ երբ կրկին 6 պակասի կրկին անհետանա:

inputHidden.hidden = true;

input.addEventListener('input', (e) => {
    if( e.target.value.length > 6 ){
        inputHidden.hidden = false;
    } else {
        inputHidden.hidden = true;
    }
})

/////////////////////////////////////////////////
// 5.Ունենք երեք input դաշտ անուն, էլ հասցե և գաղտնաբառ գրելու համար և մեկ կոճակ:
// Այցելուն դաշտերը լրացնելուց հետո սեղմում է կոճակին: RegExp-ով ստուգել
// եթե անունը միայն տառեր, թվեր կամ բացատներից է կազմված ապա դաշտը թողնել այդ գրված տեքստով և հետին ֆոն դարձնել կանաչ,
// այլապես դաշտը դատարկել, որպեսզի կրկին լրացվի և հետին ֆոնը դարձնել կարմիր:
// Էլ. հասցեի դեպքում ստուգել արդյոք պարունակում է @ և . , ընդ որում ստուգել RegExp-ով,
// եթե բավարարում է պայմանին ապա դաշտ թողել այդ տեքստով և հետին ֆոն դարձնել կանաչ,
// այլապես դաշտը դատարկել, որպեսզի կրկին լրացվի և հետին ֆոնը դարձնել կարմիր:
// Գաղտնաբառի դեպքում ստուգել արդյոք 6 սիմվոլից երկար է և հատուկ սիմվոլ պարունակում է թե ոչ,
// եթե այդպես է ապա դաշտ թողել այդ տեքստով և հետին ֆոն դարձնել կանաչ, այլապես դաշտը դատարկել,
// որպեսզի կրկին լրացվի և հետին ֆոնը դարձնել կարմիր:
// Եթե երեք պայմանն միաժամանակ կա կոճակը սեղմելիս թող դաշտերը անհետանան:


class Validation {

    nameRegexp = /[^A-Za-z\s]/;
    emailRegexp = /[@\.]/;
    passwordRegexp = /[\W]/;
    passwordMinLength = 6;

    check( type, elem ){
        if( type == 'name' ){
            return !this.nameRegexp.test( elem.value );
        }
        else if ( type == 'email' ){
            return this.emailRegexp.test( elem.value );
        }
        else if( type == 'password' ){
            return this.passwordRegexp.test( elem.value ) && elem.value.length > this.passwordMinLength;
        }
    }

    accept( elem ){
        elem.style.backgroundColor = '#00ff00';
    }

    refuse( elem ){
        elem.style.backgroundColor = '#ff0000';
        elem.value = '';
    }
}


let form = document.getElementById('form');
let submit = document.getElementById('submit');

let validation = new Validation();

submit.onclick = function (){
    let valid = true;
    for( let elem of form.children ){
        if( elem.tagName.toLowerCase() == 'input' ){
            if( validation.check( elem.name, elem ) ) {
                validation.accept( elem );
            } else {
                valid = false;
                validation.refuse( elem );
            }
        }
    }
    if(valid){
        form.innerHTML = 'Thank you!';
    }
}

//HTML//////////////////////////////////////////////////////////////////////////////
/*
<div id="form" style="margin: 50px 0 0 0;">
    <input placeholder="Name" name="name" type="text" value="">
    <input placeholder="Email" name="email" type="email" value="">
    <input placeholder="Password" name="password" type="password" value="">
</div>
<button id="submit">Submit</button>
*/
/////////////////////////////////////////////////////////////////////////////////////