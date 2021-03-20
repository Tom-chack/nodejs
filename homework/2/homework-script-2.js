// 1.Տրված  են իրարից տարբեր 𝑎,𝑏,𝑐 և 𝑑 թվերը: Կազմել ծրագիր, որը կարտածի տրված թվերից մեծագույնի արժեքը:

let a = +prompt("1st number");
let b = +prompt("2nd number");
let c = +prompt("3nd number");
let d = +prompt("4nd number");

//There is a longer solution. But I prefer this one. This looks wired but it works fine:
let max = a > b && a > c && a > d && a ||
            b > c && b > d && b ||
                c > d && c ||
                    d;
alert(max);


//////////////////////////////////////////////////////////////////////
// 2.For ցիկլի  միջոցով արտածել 1-ից 100 հատվածի թվերը, բացառությամբ 8 և 9 վրա բաժանվողների: Թող ցիկլը ընդհատվի  երբ հանդիպի միաժամանակ և 6 և 7 վրա բաժանվող թվի:

for(let i = 1; i <= 100; i++){
    if( !(i%8) || !(i%9) ) continue;
    if( !(i%6) && !(i%7) ) break;
    document.write(i + ' ');
}

//////////////////////////////////////////////////////////////////////
// 3.Քանի որ JavaScript-ում շաբաթվա օրերը համարակալված են 0-6 թվերով,  switch միջոցով ստանալ ծրագիր, որ այդ միջակայքում մուտքագրված թվի համար կարտածի շաբաթվա տվյալ օրվա տառային տարբերակը:
// Իսկ եթե թիվը այդ միջակայքից  դուրս է արտածի Error:

let dayName;
let dayNumber = +prompt("Day Number");
switch (dayNumber) {
    case 0:
        dayName = 'Sunday';
        break;
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Error';
}

document.write(`<h3>${dayName}</h3>`);

//////////////////////////////////////////////////////////////////////
// 4.Գրել ծրագիր, որ թույլ կտա հաշվել այցելուի կողմից մուտքագրած
// թիվը պարզ թիվ է թե ոչ: Պարզ են այն թվերը, որոնք բաժանվում են իրենց և 1-ի վրա:


let prime = +prompt("Your number");
let isPrime = prime + ' is a prime number';
if( prime && prime != 1 ){
    for ( i =2; i <= (prime / 2); i++){
        if( !( prime % i ) ){
            isPrime = prime + ' is not a prime number';
            break;
        }
    }
} else {
    isPrime = prime + ' is not a prime number';
}

document.write(isPrime);
////////////////////////////////////////////////////////////////////
//5.Գրել կոդ, որ թույլ կտա ստանալ նկար 5-ի տեսքը:

document.write("<div style='text-align: center;'>");
let x = 4;
for ( i = 0; i < 16; i++ ){
    if( i && !(i%4) ) x += 4;
    for ( j = 1; j <= x; j++ ){
        document.write('A');
    }
    document.write('<br>');
}
document.write("</div>");