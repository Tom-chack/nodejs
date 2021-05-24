//3.Ստեղծել կլաս , որը ժառանգում է EventEmitter կլասը:Կլաս ունի կանստրուկտոր , որով տալիս ենք name և surname: Կլասում ստեղծել 
//fullName անունով մեթոդ,որը վերդարձնում է անուն ազգանունը:
//Կլասից ստեղծել որևէ օբեկտ:Օբեկտին ավելացնել fullName իրադարձություն, որ տեղի ունենալիս կարտածի անուն
 //ազգանունը օգտագործելով fullName մեթոդը: Emit անել fullName:

 const EventEmitter = require('events');

 class Person extends EventEmitter{

    constructor(name, surName){
        super();
        this.name = name;
        this.surName = surName;
    }

    fullName(){
        return this.name + ' ' + this.surName;
    }

 }

 const person = new Person('Artyom', 'Chack');
 person.on('fullName', function() {
     console.log( this.fullName() );
 });

 person.emit('fullName');
