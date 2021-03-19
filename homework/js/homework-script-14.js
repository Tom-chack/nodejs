// 1.Ունենք էջ որում կա input և a թեգ, որը հղում է դեպի sunnyschool.am:
// Եթե այցելուն սեղմում է հղման սեղմի , ծրագիրը մինչև հին էջը լքել ստուգի եթե այցելուն 10 վայրկյանից ավել է եղել էջում
// ապա զգուշացնի որ փոփոխությունները հնարավոր է չպահպանվեն:

let start = Date.now();

window.addEventListener('beforeunload', (e) => {
    let now = Date.now();
    let pass = (now - start) / 1000 ;
    console.log(pass.toFixed());
    if( pass.toFixed() > 10 ) {
        e.preventDefault();
        e.returnValue = '';
    }
});

///////////////////////////////////////////////////////
// 2.Անջատել body paste անելու հատկությունը և սարքել copyCounter կոճակ
// որին սեղմելիս կարտածի body  copy-ների քանակը:

let copyCount = 0;
document.body.oncopy = () => copyCount++;
document.body.onpaste = (e) => e.preventDefault();
button.onclick = () => alert(copyCount);

//////////////////////////////////////////////////////
// 3.  Ունենք երկու input : Գրել ծրագիր որը թույլ չի տա երկրորդ input լրացնել
// մինչև առաջին input-ում որևէ բան գրված չլինի:

let iName = form.elements['name'];
let iEmail = form.elements['email'];
iEmail.onfocus = (e) => {
    if( !iName.value.length ){
        e.preventDefault();
        alert("Please fill the first (name) field");
    }
}


///////////////////////////////////////////////////////
// 4.Ունենք Red, Green, Blue գույների checkbox: Ստեղծել կոճակ որին սեղմելիս բոլորը կնշվեն
// երկրորդ անգամ նույն կոճակին սեղմենք բոլորը կդառնան չնշված:

checkAll.addEventListener('click', (e) => {
    [...checkboxes.children].map( item => {
        if( item.tagName == 'INPUT' ) item.checked = !item.checked;
    })
});

// HTML ----------------------
/*
<div id="checkboxes">
    Red: <input type="checkbox" name="red" value=""><br>
    Blue: <input type="checkbox" name="blue" value=""><br>
    Green: <input type="checkbox" name="green" value=""><br>
    <button id="checkAll">Check All</button>
</div>
*/


//////////////////////////////////////////////////////
// 5.Ստեծել Sign Up Form ,որով այցելուն պետք գրանցվի հավաքելով email և password:
// Form submit անելուց հետո ստուգել եթե email համապատասխանում է
// չափանիշներին(էլ հասցեի կառուցվածքը ստուգել)
// և գաղտնաբառը 6 սիմվոլից շատ է ապա այս տվյալները պահել որևէ օբեկտում,
// որից հետո պետք է գրանցման ֆորման անհետանա հայտնվի Login Form,
// որտեղ եթե այցելուն ճիշտ հավաքի տվյալները տեսնի տեքստ՝
// welcome կամ հայտնվի էջում որտեղ գրված է welcome (welcome.html).

let user = {};
login.hidden = true;
signup.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = signup.elements['email'];
    let password = signup.elements['password'];
    if( email.value.match(/^[A-Z0-9\.\_\-]+@[A-Z0-9\.\_\-]+\.[A-Z]+$/i) && password.value.length > 6 ){
        user.email = email.value;
        user.password = password.value;
        login.hidden = false;
        signup.hidden = true;
    }
});
login.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = login.elements['email'].value;
    let password = login.elements['password'].value;
    if( email == user.email && password == user.password ){
        login.hidden = true;
        message.innerText = 'Welcome!';
    } else {
        message.innerText = 'Wrong Login Details!';
    }
});

// HTML -------------------------------------------------
/*
<form action="" id="signup">
    <input name="email" value="">
    <input name="password" value="">
    <input type="submit" name="Register" value="Register">
</form>
<form action="" id="login">
    <input name="email" value="">
    <input name="password" value="">
    <input type="submit" name="Login" value="Login">
</form>
<p id="message"></p>
*/