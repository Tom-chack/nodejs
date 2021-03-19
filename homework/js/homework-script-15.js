// 1.Ստեղծել օբեկտ որում կա երկու հատկություն՝ այցելուի էկրանի լայնությունը և բարձրությունը:
// Ստեղծել կոճակ որին սեղմելիս կիմանաք այդ արժեքները:

let screenData = {
    width: screen.width,
    height: screen.height
}

button.onclick = e => {
    alert(`Window width: ${screenData.width} / Window height ${screenData.height}`)
}

/////////////////////////////////////////////////
// 2.Գրել ծրագիր , որը կստուգի եթե այցելու էկրանի չափը փոքր է 768px ապա հղումը փոխի դեպի m.facebook.com,
// այլապես facebook.com (location.replace())

// if( screen.width < 768 ){
//     window.location.replace('m.facebook.com');
// } else {
//     window.location.replace('facebook.com');
// }


///////////////////////////////////////////////////
// 3.Ունենք form , որով այցելուն մուտքագրում է իր էլ. հասցեն  և submit անուն:
// Ստեղծել ծրագիր , որը չերևացող input որպես value կգրի YES եթե այցելու բրաուզերը
// Chrome է և NO եթե այլ բրաուզեր է : Submit ժամանակ այդ արժեքը նույնպես պետք է ուղարկվի սերվեր:
// Submit ժամանակ արտածել input value-ները (event.preventDefault() Submit ժամանակ գործողությունը
// կանգնեցնելու համար):

function checkBrowser(){
    const agent = navigator.userAgent;
    let browser = '';
    browser = /edg/i.test(agent) ? 'Edge' : browser;
    browser = /firefox|fxios/i.test(agent) ? 'Firefox' : browser;
    browser = /; msie|trident/i.test(agent) ? 'IE' : browser;
    browser = /chrome|crios/i.test(agent) && !(/opr|opera|edg/i).test(agent) ? 'Chrome' : browser;;
    browser = /safari/i.test(agent) && !(/edg|chrome|opera|fxios|firefox/i).test(agent) ? 'Safari' : browser;
    browser = /opr|opera/i.test(agent) ? 'Opera' : browser;
    return browser;
}

testForm.onsubmit = (e) => {
    e.preventDefault();
    let browser = checkBrowser();
    console.log(testForm.elements['browser']);
    testForm.elements['browser'].value = (browser == 'Chrome') ? 'Yes' : 'No';
    [...testForm.elements].forEach( input => {
        console.log(`name: ${input.name} | value: ${input.value}`);
    } );
}

console.log(checkBrowser());

/////////////////////////////////////////////////////////////
// 4.Ունենք հղում դեպի sunnyschool.am:
// Գրել ծրագիր որ այցելուն երբ սեղմի հղման լրացուցիչ հարց ստանա արդյոք հցում բացի նոր window թե նույնի  մեջ:
// Եթե այցելուն confirm անի թող բացի նոր window մեջ, եթե ոչ ապա նույն էջում բացի Sunny School կայքը:

link.onclick = function(){
    let targetBlank = confirm('Do you want to open this page in a new tab?');
    link.target = ( targetBlank ) ? '_blank' : '_self';
}

/////////////////////////////////////////////////////////////
// 5.Ունենք HTML,CSS,Bootstrap,JavaScript, jQuery, Node.JS զանգված: Գրել ծրագիր որով այցելու կարող է թերթել այս ցանկի բոլոր անդամներ երբ սեղմի առաջ կամ հետ գնալու կոճակներ, կամ ծրագիրը ավտոմատ 3 վարկյան մեկ փոխի:Էջը բացելիս պետք է երևա զանգված առաջին անդամը, երբ առաջ գնալով հասնենք վերջին անդամին (Node.JS) դրանից հետո առաջ սեղմելիս երևա կրկին առաջին անդամը, իսկ երբ առաջին անդամից հետ ուզենք գնանք երևա զանգվածի վերջին անդամը (Նկ. Home5.jpg):
