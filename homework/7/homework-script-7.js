// 1.Ստեղծել օբեկտ, որը ունի   name: "John",  lastname:”Smith”, հատկություններ:
// Փոխել   lastname դրոշը այնպես, որ հնարավոր չլինի այն ջնջել:

let user = {
    name: "John",
    lastname: "Smith"
}

Object.defineProperty(user, "lastname", {
    configurable: false
});

//////////////////////////////////////////////////////////////////
// 2.Ստեղծել  constructor  ֆունկիցա, որը կունենա 4 հատկություն և այդ constructor  ստեղծել 2 օբեկտ (Ազատ եք հատկություններ ընտրելու հարցում):

function Member( login, email, role, regdate ){
    if( new.target ){
        this.login = login;
        this.email = email;
        this.role = role;
        this.regdate = ( regdate ) ? regdate : new Date().toLocaleDateString();
    }
}

let john = new Member( 'john', 'john@gmail.com', 'admin' );
let david = new Member( 'david', 'david@gmail.com', 'customer' );

console.log( john );
console.log( david );

////////////////////////////////////////////////////////////////////
// 3. Ստեղծել օբեկտը , որը  ունի  որևէ հատկություն: Նաև ունենք երկրորդ օբեկտը:
//     Գրել կոդը այնպես, որ առաջինի հատկություն կանչենք երկրորդի համար:
//     (Ազատ եք օբյեկտներ ստեղծելու և առաջինին հատկություն տալու հարցում):

let item = {
    title: 'New Article'
}

let post = {
    content: 'Lorem ipsum dolor',
    __proto__: item
}

console.log( post.title );

///////////////////////////////////////////////////////////////////
// 4.Ստեղծել կանստրոկտորը  4 հատկություններով:  Կասնտրուկտորը  օգտագործելով ստեղծել երկու օբեկտը:
// Կանստրուկտրին օբյեկտ ստեղծելուց հետո  ավելացնել  մեկ մեթոդը և  մեկ հատկություն:
// Այդ մեթոդը և հատկությունը կանչել օբեկտներից մեկի համար (Ազատ եք հատկություններ և մեթոդ ընտրելու հարցում):

function Article( title, content, author, path ){
    this.title = content;
    this.content = content;
    this.author = author;
    this.path = path;
}

let news = new Article( 'News', 'Some good news!', 'Sara', '/good-news/' );
let sport = new Article( 'Sport', 'Latest sport news!', 'Konrad', '/sport-news/' );

Article.prototype.intro = function (){
    return this.content.substr(0, 100);
}

console.log( news.intro() );

////////////////////////////////////////////////////////////////////
// 5.Ստեղծել FirstTwoLetterUpperCase մեթոդ  String տեսակի համար:
// Այն մեթեդ ցանկացած բառի առաջին երկու տառ դարձնում է մեծատառ:

String.prototype.FirstTwoLetterUpperCase = function (){
    return this.substr(0, 2).toUpperCase();
}

let fullName = 'John Doe';
console.log( fullName.FirstTwoLetterUpperCase() );