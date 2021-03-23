module.exports.wordsFromString = function(str) {
    let regEx = /[^A-Za-z 0-9]/g
    let newElem = []
    let arr = str.split(" ")
    let isSym = false;
    console.log(arr)
    for (let elem of arr) {
        for(let i = 0;i<elem.length;i++){
            if(regEx.test(elem[i])){
                isSym = true
                i = elem.length
            }else{
                isSym = false
            }
        }
        if(isSym == false){
            newElem.push(elem)
        }
    }    
    return newElem  
}
