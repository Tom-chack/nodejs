////////////////////////////////////////////////////////////
// 1. console.log(1 +  -"1" + "2") արդյունքը ինչ է և ինչու է այդպես:

console.log(1 +  -"1" + "2");
// Minus converts "1" to 1, it becomes -1.
// Then it'll be concat to "2", because "2" is a string  (1 + -1) + "2" = "02"
//Answer: "02"


////////////////////////////////////////////////////////////
// 2. console.log(3>2>1) արդյունքը ինչ է և ինչու է այդպես:

console.log( 3 > 2 > 1 );
// It works like this (3 > 2) > 1. While 3 > 2 is true,
// then true > 1 is false, because true becomes 1 and 1 is not greater than 1.
// Answer: false


///////////////////////////////////////////////////////////
// 3. typeof undefined == typeof NULL արդյունքը ինչ է և ինչու է այդպես:

console.log( typeof undefined == typeof NULL );
// NULL and null are not the same. NULL will be tracked as undefined variable
// so the undefined == undefined
// Answer: true


//////////////////////////////////////////////////////////
// 4. console.log(0.1 + 0.2 == 0.3) արդյունքը ինչ է և ինչու է այդպես:

console.log(0.1 + 0.2 == 0.3);
// 0.1 + 0.2 doesn't have an exact 0.3 value.
// It's something like 0.30000000000000004, that's why the result is false.


// 5. prompt-ով մուտքագրել երկու թիվ և արտածել մեծագույնը օգտագործելով միայն prompt() , >, &&, alert.
let a = +prompt("First number");
let b = +prompt("Second number");
let max = a > b && a || b > a && b;
alert(max);