// 1. Գրել ֆունկցիա որ զանգվածից կհեռացնի ֆունկցիային տրված արժեքին համարժեք անդամը
// եթե զանգվածում կա այդպիսի անդամ:


////////////////////////////////////////////////////////
// 2.Զանգվածից հեռացնել  false, null, 0, "" անդամները:

let a = [false, 9, -1, null, 0, "", 'alo'];
console.log( a.filter( x => x) );

////////////////////////////////////////////////////////
// 3.Հեռացնել զանգված կրկնվող անդամները:

let b = [12, 23, 33, 33, 45, 23, 12, 52];

uniqueArray = [... new Set(b) ];
console.log( uniqueArray );
//OR
uniqueArray = Array.from( new Set(b) );
console.log( uniqueArray );
//OR
uniqueArray = b.filter( (item, pos) => b.indexOf(item) == pos );
console.log( uniqueArray );

/////////////////////////////////////////////////////////
// 4.Գտնել [
//      '2020/03/01',
//      '2020/01/01',
//      '2020/03/05',
//      '2018/09/01'
// ] ամենավերջին ամսաթիվը և արտածել:
//


// 5.Գտնել զանգվածի ամենաշատ կրկնվող անդամը: Արտածել քանակը և այդ անդամը:

let a = [1,23,45,23,45,65,23,55,67,88,23,78,98];

const thePopular = function ( a ){
    a = a.sort( (x, y) => a.filter( item => item === x ).length - a.filter( item => item === y ).length );
    return a[ a.length - 1 ];
}

console.log( thePopular(a) );