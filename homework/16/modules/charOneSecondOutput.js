
const charOneSecondOutput = function ( phrase ){
    let i = 0;
    let chars = phrase.split('').filter( v => v.trim() ); //filter and remove spaces
    let interval = setInterval(() => {
        if( i > chars.length ){
            clearInterval(interval);
        } else if( chars[i] ){
            console.log(chars[i]);
        }
        i++;
    }, 1000);
};

module.exports.charOneSecondOutput = charOneSecondOutput;

