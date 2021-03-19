// 1. Գրել կոդ, որը կստուգի տեքստը պարունակում է hello բառը, եթե այո ապա արտածի "Yes":

let phrase1 = prompt();
let matchPhrase1 = phrase1.match( /hello/ig ) || [];
if( matchPhrase1.length ){
    console.log('Yes');
}

///////////////////////////////////////////////////////////////
// 2. Գրել կոդ որը նախադասության բոլոր սիմվոլները կփոխարինի 1-ով իսկ բացատները 0-ով:
let phrase2 = prompt();
let matchPhrase2 = phrase2.replace( /\S/ig, '1' ).replace( /\s/ig, '0' );
console.log(matchPhrase2);


///////////////////////////////////////////////////////////////
// 3.Ստեղծեք անձ կլասս: Այն պետք է ընդունի անուն, ազգանուն:
// Կլասում ստեղծել մեթոդը որը ստուգում է արդյոք անուն ազգանունը կազմված են միայն տառերից և բացատից:

class Person {

    constructor( firstName, lastName ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    validate(){
        let regexp = /^[A-Z\s]+$/i;
        if( regexp.test(this.firstName) && regexp.test(this.lastName) ){
            alert('Correct!');
        } else {
            alert('Incorrect!');
        }
    }
}

let person = new Person( prompt('First Name'), prompt('Last Name'));
person.validate();


///////////////////////////////////////////////////////////////
// 4.Ստեղծել կլաս, որին կանստրուկտրին տալիս ենք number1, number2 հատկությունները:
// Ստեղծել կլաս, որը ժառանգում է այդ կլասին և կանստրուկտրին տալիս ենք number1, number2, number3, number4 հատկություններ ընդ որում, ժառանգում է առաջին կլասի կանստրուկտորը, որպեսզի name1, name2 այդ կանստրուկտորի միջոցով տա:
// Երկրոդ կլասում ստեղծել ֆունկցիա , որ կհաշվի այդ չորս թվերի միջինը: Երկրոդ կլասից ստեղծել օբեկտ և կանչել միջինը հաշվող մեթոդը:

class myParentClass{
    constructor( number1, number2 ){
        this.number1 = +number1;
        this.number2 = +number2;
    }
}

class myChildClass extends myParentClass{
    constructor( number1, number2, number3, number4 ){
        super(number1, number2);
        this.number3 = +number3;
        this.number4 = +number4;
    }
    average(){
        return (this.number1 + this.number2 + this.number3 + this.number4) / 4
    }
}

myClass = new myChildClass(prompt(), prompt(), prompt(), prompt());
console.log( myClass.average() );

///////////////////////////////////////////////////////////////
// 5.Ստեղծել կլասս , որին կանստրուկտրով տալիս են  էլ. հասցե հատկությունը:
// Էլ. հասցեն  պետք է լրացվի set մեթոդներով՝ստուգելով արդյոք  տրվող արժեքը վերջանում է
// mail.ru, gmail.com, rambler.ru կամ yahoo.com-ով , նոր վերագրել այդ արժեքը:
// Ստեղծել get մեթոդ, որ թույլ կտա արտածել mail հաtկության արժեք եթե կա արժեք կամ արտածի "No" :

class User{
    constructor( email ) {
        this.email = email;
    }
    set email( email ){
        let allowedDomains = ['mail.ru', 'gmail.com', 'rambler.ru', 'yahoo.com'];
        let emailArray = email.split('@');
        if( ~allowedDomains.indexOf(emailArray[1]) ){
            this._email = email;
        } else {
            this._email = '';
        }
    }
    get email(){
        return (this._email) ? this._email: 'No';
    }
}

let user = new User(prompt('Your Email'));
console.log( user.email );