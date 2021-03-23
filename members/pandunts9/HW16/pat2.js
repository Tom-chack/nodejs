module.exports.wordsFromString = function(str) {
    let regEx = /[^\w_]/
    let newElem = []
    let arr = str.split(" ")
    console.log(arr)
    for (let elem of arr) {
        if( !regEx.test( elem ))  newElem.push( elem );
    }    
    return newElem  
}
