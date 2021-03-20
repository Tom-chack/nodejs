// 1.Գրել ֆունկցիա , որ կհեռացնի $120 արտահայտության դոլարի նշանը սկզբից և կհայտնվի 120-ից հետո:

function reversFirstChar(phrase){
    return phrase.slice(1) + phrase[0];
}

console.log( reversFirstChar('$120') );

///////////////////////////////////////////////////////////
// 2.Գրել ֆունկցիա, որը մուտքագրված բառի տառերի քանակի չափով պատահական տառեր կարտածի այդ նույն բառից:

// -------- ? Can't follow the requirement. It doesn't make sense.


///////////////////////////////////////////////////////////
// 3.Գրել Ֆունկցիա, որ մուտքագրված բառը կարտածի տառերը վերջից սկիզբ: Օրինակ Hello->olleH:

function reversPhrase( phrase ){
    let reversedPhrase = '';
    for ( let letter of phrase ){
        reversedPhrase = letter + reversedPhrase;
    }
    return reversedPhrase;
}

console.log( reversPhrase('Hello') );

//////////////////////////////////////////////////////////
// 4.Ստուգել թիվը Palindrome է թե ոչ (Աջից ձախ կամ ձախից աջ կարդալիս նույն թիվ է, օրինակ 787):

function isPalindrome( num ){
    num = num.toString();
    //I'm using reversPhrase() function from the #3 task
    if( num == reversPhrase(num) ) return true;
    return false;
}
let num = prompt("Insert number");
alert( isPalindrome( num ) ? 'This number is palindrome' : 'This number is not palindrome' );

//////////////////////////////////////////////////////////
// 5.Գրել ֆունկցիա, որը նախադասությունը կարտածի առանց կրկնվող տառերի , իսկ կրվող տառերը կերևա console.log պատուհանում:

function uniqueCharPhrase( phrase ){

    let unique = '';
    let notUnique = '';

    for( let letter of phrase ){

        //using bitwise NOT ~ operator to shortening the statement
        if( ~unique.indexOf(letter) && letter != ' ' ){

            //collecting a unique set of repeated letters
            if( notUnique.indexOf(letter) == -1 ) notUnique += letter + ', ';

            //skip the loop, because the current letter is a repeated letter in the phrase
            continue;
        }
        //collecting a unique set of not repeated letters
        unique += letter;
    }
    //clear comma and spaces from the end of the notUnique letters list
    console.log( 'Not repeated letters: "' + notUnique.replace(/[,\s]+$/g, '') + '"' );

    //return the phrase with only unique letters
    return unique;
}

let phrase = prompt("Insert a phrase");
alert( uniqueCharPhrase( phrase ) );