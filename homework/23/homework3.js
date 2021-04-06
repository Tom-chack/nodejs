// 3.Ստեղծել կլաս , որը ժառանգում է EventEmitter կլասը:Կլաս ունի կանստրուկտոր , 
// որը ունի  rest հատկության(Օբեկտ ստեղծելիս տալիս ենք քանակ, օրինակ 10) : Կլասում ստեղծել buy  անունով մեթոդ,
// որը արգումենտ է վերցնում գնվող ապրանքների քանակը:Այս մեթոդը rest հատկությունից հանում է գնվող ապրանքների քանակը:
// Կլասից ստեղծել որևէ օբեկտ:Օբեկտին ավելացնել count իրադարձություն, որ տեղի ունենալիս կարտածի rest հատկության քանակը:
// Կանչել buy մեթոդը 2 թվի համար, որից հետո Emit անել count:

const EventEmitter = require('events');

class UpdateStock extends EventEmitter {
    constructor( stock ){
        super();
        this.stock = stock;
        console.log(`We have ${this.stock} products in the stock`);
    }

    buy( productsCount ){
        this.stock -= productsCount;
        console.log(`New order: ${productsCount} products`);
    }
}

const updateStock = new UpdateStock(10);

updateStock.on('count', ()=>{
    console.log('The number of products in the stock: ', updateStock.stock );
})

updateStock.buy(2);
updateStock.emit('count');

updateStock.buy(3);
updateStock.emit('count');
