// 1.Ունենք ֆունկցիա որ կախված է երկու պարամետրից:
// Գրել ծրագիր որ եթե երկրորդ պարամետրին արժեք չտալու դեպքում  ֆունկցիան երկրորդ պարամետրի փոխարեն գրի 'no text given'.
// Չօգտագործել ֆունկցիային defualt արժեք տալու հնարավորությունը:

function check( a, b ){
    alert( 'a: ' + a + ' / b: ' + ( b === undefined ? 'no text given' : b ) );
}

check('text for -a- parameter');

//////////////////////////////////////////////////////////////////////////////
// 2. Գրել Fahrenheit-ը Celsius վերածող ֆունկցիա: Այցելուն պետք է prompt-ով տա Fahrenheit-ը և տեսնի արդյունքը:
function f2c( f ){
    c = (+f - 32) * 5/9;
    alert( c.toFixed(1) );
}

f2c( prompt("Temperature in Fahrenheit") );

//////////////////////////////////////////////////////////////////////////////
// 3.Գրել ֆունկցիա ընդունում է  տարիքը, որպես պարամետր և  ստուգում է,  եթե օգտատիրոջ տարիքը մեծ է 18-ից վերադարձնի true, այլապես լրացուցիչ ստուգի ունի արդյոք լրացուցիչ թույլտվություն  ծնողների կողմից, թե ոչ :
// Գրել կոդ, որի միջոցով օգտատերը կմուտքագրի իր տարիքը և վերոնշյալ ֆունկցիայի միջոցով  կստուգվի մուտք ունի օգտատերը, թե ոչ, և կարտածի համապատասխանաբար 'Access granted' կամ  'Access denied'	 հաղորդագրությունները:

let age = +prompt("Your Age");
let checkAccess = age => age >= 18;
alert( checkAccess(age) ? 'Access granted' : 'Access denied' );

//////////////////////////////////////////////////////////////////////////////
// 4.Ինչ կլինի ներքոնշյալ կոդի արդյունքը և ինչու
var a={},
b={key:'b'},
c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);

// The result will be 456.
// Because both b and c will be tracked as [object Object] and the key of a object will be overwritten by the last assigned parameter.
// In this case, the last assigned parameter is c and the value of c is 456, thus the a[object Object] = 456.

/////////////////////////////////////////////////////////////////////////////
// 5.Ստեղծեք թվերի օբյեկտը, որում լինեն 15 հատկություններ, որոնց արժեքները կամայական թվերն են:
// Ստեղծեք մեթոդ, որի միջոցով կորոշեք օբյեկտի ՝  ամենամեծ  3 բազմապատիկ  և ամենամեծ  4 բազմապատիկ թվերը և կարտածեք:
let obj = {
    a: 10,
    b: 100,
    c: 60,
    d: 90,
    e: 520,
    f: 9,
    g: 24,
    h: 400,
    i: 390,
    j: 300,
    k: 66,
    l: 36,
    m: 320,
    n: 453,
    o: 820,
    multiple3: function (){
        let max3 = -Infinity;
        for( let key in this ){
            if( typeof this[key] == 'number'){
                if( this[key]%3 === 0 && max3 < this[key] ) max3 = this[key];
            }
        }
        return max3;
    },
    multiple4: function (){
        let max4 = -Infinity;
        for( let key in this ){
            if( typeof this[key] == 'number'){
                if( this[key]%4 === 0 && max4 < this[key] ) max4 = this[key];
            }
        }
        return max4;
    },
    checkMultiples: function (){
        alert(`Ամենամեծ 3 բազմապատիկը ${this.multiple3()} է  և ամենամեծ 4 բազմապատիկը ${this.multiple4()}`);
    }
}

obj.checkMultiples();
