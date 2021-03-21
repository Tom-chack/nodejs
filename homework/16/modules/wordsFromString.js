
const wordsFromString = function ( phrase ){
    let words = phrase.split(' ');
    words.forEach(word => {
        if( !word.match(/\W/g) ) console.log(word);
    })
}

module.exports.wordsFromString = wordsFromString;