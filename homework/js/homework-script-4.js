// 1.Գրել կոդ , որը կստուգի մուտքագրված է արդյոք թիվ և եթե թիվ է այդ թվից քառակուսի արմատ կհանի:
let num = +prompt("Please, insert a number");

if( !isNaN(num) ) alert( 'Checked with isNAN: ' + Math.sqrt(num) );
//OR
if( Number.isInteger(num) ) alert( 'Checked with Number object: ' + Math.sqrt(num) );
//OR
if( typeof(num) == 'number' ) alert( 'Checked with typeof: ' + Math.sqrt(num) );


//////////////////////////////////////////////////////////
//2.Պատահական 5 թիվ գեներացնել 0-10 տիրույթում  այնպես որ , 0-5 տիրույթի թվերը կլորանան դեպի վերև իսկ 5-10 տիրույթի թվերը դեպի ներքև և արտածել պատահական թիվը և կլորացած թիվը :
function rand(min, max){
    let randNumber = Math.random() * (max-min) + min;
    if( randNumber <= 5 ){
        result = Math.ceil( randNumber );
    } else {
        result = Math.floor( randNumber );
    }
    console.log(`random number: ${randNumber} | result: ${result}`);
}

rand(0, 10);

//////////////////////////////////////////////////////////
//3.Գրել ֆունկցիա, որը տրված բառի վերջին տառը կդարձնի մեծատառ:

function last2LowCase( phrase ){
    return phrase.substr(0, phrase.length -1) + phrase[ phrase.length - 1 ].toUpperCase();
}
console.log( last2LowCase('JavaScript') );


/////////////////////////////////////////////////////////
//4. Գրել Ֆունկցիա, որ մուտքագրված բառից կարտածի միայն զույգ ինդեքս ունեցող տառերը: Օրինակ barev կդառնա brv
function evenIndexChars( phrase ){
    let newPhrase = '';
    for ( let char of phrase ){
        if( char.charCodeAt() % 2 === 0 ){
            newPhrase += char;
        }
    }
    return newPhrase;
}

console.log( evenIndexChars('JavaScript') );

/////////////////////////////////////////////////////////
// 5.Գրել ծրագիր , որը Prompt պատուհանի title-ում կգեներացնի 5 նշանոց կոդ տառերից և թվերից կազմված և եթե այցելուն ճիշտ հավաքի այդ կոդը prompt պատուհանում և հաստատի ապա alert անի ճիշտ է, այլապես alert անի սխալ է:
let code = '';
function customRand (min, max){
    randNum = Math.floor( Math.random() * (max-min) ) + min;
    //Numbers: from: 48 - 57;
    //Low letters: 97 - 122;
    if( randNum < 48 || randNum > 57 && randNum < 97 || randNum > 122 ){
        return customRand(min, max);
    }
    return randNum;
}

for ( i=0; i <5; i++ ) code += String.fromCodePoint(customRand(48, 122));

if( code == prompt( "Insert the code: " + code ) ) {
    alert('Correct!');
} else {
    alert('Incorrect!');
}