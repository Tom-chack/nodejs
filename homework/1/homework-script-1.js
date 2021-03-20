//////////////////////////////////////////////////////
//1. Գրել կոդ, որը  console  պատուհանում տպի Ձեր Անուն Ազգանունը և Alert անի My First Homework արտահայտությունը:

console.log('Artyom Chakhoyan');

//////////////////////////////////////////////////////
//2. Գրել կոդ որը աշխատացնելուց հետո  երեք անգամ բացում է prompt պատուհանը և այցելուն այդ պատհուններից առաջինում գրում է անունը, երկրորդում տարիքը,  իսկ երրորդում իր քաղաքը, որից հետո alert  է լինում հետևյալ արտահայտությունը՝
//My name is ՙՙմուտքագրված անունը՚՚ i am ՙՙմուտքագրված տարիքը՚՚ old. I am from ՙՙմուտքագրված քաղաքը՚՚

let name = prompt('Your name');
let age = prompt('Your age');
let city = prompt('Your hometown');
alert(`My name is ${name} I am ${age} years old. I am from ${city}`);

////////////////////////////////////////////////////
//3. Գրել կոդ , որը կստուգի prompt-ով տրված թիվը 8-20 միջակայքում  է, թե ոչ:
//Console-ում  տպի true եթե ճիշտ է և false եթե սխալ է:

let number = prompt('Insert a number');
console.log( number > 8 && number < 20 );


////////////////////////////////////////////////////
//4. console.log(undefined || 0 || null || true && "0" && " " && 5 || 9)
//Կոդը տեղադրել script-ում և գրել մեկնաբանություններ այս  գործողությունների արդյունքի մասին   և ինչու է այդպես:

console.log( undefined  || 0      || null   ||  true  &&  "0"   &&  " "   &&  5  || 9 ); // step 1
console.log( false      || false  || false  ||  true  &&  true  &&  true  &&  5  || 9 ); // step 2
console.log( false      || false  || false  ||                                5  || 9 ); // step 3
console.log( 5 );                                                                        // step 4

// Answer: is 5. The third step above shows the result of (true && "0" && " " && 5) statement. it's 5.
// And the 5 will be the first true value in || comparison.


////////////////////////////////////////////////////
//5. Ներքոնշյալ կոդը տեղադրել script-ում և գրել մեկնաբանություններ այս  գործողությունների արդյունքները  ըստ տողերի և ինչու է այդպես

console.log("" + 1 + 0);            //10    - If one of the items is a string in the first addition, the "+" operator will work as concat for all
console.log(true + false);          //1     - true is converted to 1, false to 0. 1 + 0 = 1
console.log("2" * "3");             //6     - multiplication converts numeric strings to integers. Thus 2 * 3 = 6
console.log("$" + 4 + 5);           //$45   - The same #1 case. All items will be concat. "$"+4+5 = "$45"
console.log("4px" - 2);             //NaN   - The first item cannot be converted to integer, so the result is NaN
console.log(null + 1);              //1     - null will be converted to 0. the result is 0 + 1 = 1
console.log(undefined + 1);         //NaN   - undefined cannot be converted to 0. The result will be NaN
console.log("apple" > "pineapple"); //false - It compares first letter, if they are equal goes farther. in this case a is 65, p is 80, so p is greater than a, so the result is false
console.log("2" > "12");            //true  - Both are compared as strings, so the first chars will be compared. The 2 is 98, the 1 is 97, so the result is true.

