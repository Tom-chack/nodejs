// 1.Գրել ֆունկցիա, որը կհաշվի երկու թվերի տարբերության մոդուլը (միշտ տարբերությունը դրական թիվ լինի )

function getModule(a, b){
    return ( 0 > (a-b) ) ? -(a-b) : a-b;
}

let a = +prompt("First Number");
let b = +prompt("Second Number");

alert( getModule(a, b) );

//////////////////////////////////////////////////////////////////
// 2.Գրել ֆունկցիաներ, որոնցից առաջինը կստուգի արդյոք  մուտքագրված թիվը 25-65 հատվածում է թե ոչ, իսկ երկրորդը կստուգի թիվը պարզ է թե ոչ, պարզ են այն թվերը , որոնք իրենց կամ մեկի վրա են բաժանվում: Գրել կոդ որ կկանչի այս երկու ֆունկցիաներին մուտքագրված թվի համար, եթե երկու պայմաններին  էլ բավարարի թող արտածի <<ճիշտ է>> բառը, իսկ եթե գոնե մեկին չի բավարարում արտածի սխալ է բառը:

function isNumberInRange(a){
    return a > 25 && a < 65;
}

function isPrime(a){
    let isPrime = true;
    if( a && a != 1 ){
        for ( i =2; i <= (a / 2); i++){
            if( !( a % i ) ){
                isPrime = false;
                break;
            }
        }
    } else {
        isPrime = false;
    }
    return isPrime;
}

let num = +prompt("Your Number");

if( isNumberInRange(num) && isPrime(num) ){
    alert("Correct!");
} else {
    alert("Incorrect!");
}

////////////////////////////////////////////////////////////////
// 3.Գրել ֆունկցիա , որը կստուգի արդյուք  օբյեկտը դատարակ է թե ոչ:

function isEmpty( obj ){
    for( let key in obj ) return false;
    return true;
}

obj = {};

alert( isEmpty(obj) ? 'Empty!' : 'Not Empty' );

////////////////////////////////////////////////////////////////
// 4.Կա օբեկտ  box անունով, որը ունի   հատկություններ big 250 արժեքով, middle 400 արժեքով  և small 350 աժեքով:
// Գրել ֆունկցիա որը կհաշվի այս հատկությունների աժեքների գումարը:

let box = {
    big: 250,
    middle: 400,
    small: 350
};

function propSum(obj) {
    let sum = 0;
    for ( let key in obj ) sum += obj[key];
    return sum;
}

alert( propSum( box ) );

/////////////////////////////////////////////////////////////////
// 5.Ստեղծեք մարդ օբյեկտ: Այն պետք է ունենա անուն, ազգանուն, սեռ և տարիք հատկությունները: Ստեղծեք մեթոդ, որը կախված նրանից թե տվյալ մարդը ինչ սեռի ներկայացուցիչ է և որ տարիքային խմբին է պատկանում թող արտածի համապատասխան թեքստը:
//
//  ➢ Եթե նա կին է
//    o մեծ  63-ից, ապաարտածում է ՙՙնա տատիկ է՞՞:
//    o Եթե 17-63 տարեկան է, ապա արտածում է ՙՙնա աշխատող է՞՞:
//    o Եթե 0-17, ապա  արտածում է ՙՙնա փոքր աղջիկ է՞՞:
//  ➢ Եթե նա տղամարդ է
//    o մեծ 65-ից, ապա արտածում է  ՞՞նա պապիկ է՞՞:
//    o Եթե 17-65 տարեկան է, ապա արտածում է  ՞՞նա աշխատող է՞՞:
//    o Եթե 0-17, ապա  արտածում է ՞՞նա փոքր տղա է՞՞:
//
//  Մինչև այս մեթոդը կանչելը այցելուն կարող է prompt-ով փոխել  սեռը և տարիքը կամ թողնել նույնը, որից հետո կիմանա իր կարգավիճակը:

let user = {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'M',
    age: 0,
    fullName: function (){
        return this.firstName + ' ' + this.lastName;
    },
    checkUser: function (){
        this.getData();
        var message = 'Տվյալները սխալ են';
        if( this.gender == 'F' ){
            if( this.age > 63 ) message = this.fullName() + 'ը տատիկ է';
            else if( this.age > 17 && this.age <= 63 ) message = this.fullName() + 'ը աշխատող է';
            else if( this.age <= 17 ) message = this.fullName() + 'ը փոքր աղջիկ է';
        } else if ( this.gender == 'M'){
            if(this.age > 63) message = this.fullName() + 'ը պապիկ է';
            else if(this.age > 17 && this.age <= 63) message = this.fullName() + 'ը աշխատող է';
            else if(this.age <= 17) message = this.fullName() + 'ը փոքր տղա է';
        }
        alert(message);
    },
    getData: function (){
        this.firstName = prompt("Your First Name?", this.firstName);
        this.lastName = prompt("Your Last Name?", this.lastName);
        this.gender = prompt("Your Gender, please type F (female) or M (male)?");
        this.age = +prompt("Your Age?");
    }
}

user.checkUser();