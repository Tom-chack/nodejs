module.exports.charOneSecondOutput = function(str) {
    let arr = str.split("")
    let index = 0

    let myF = setInterval(()=>{
        console.log(arr[index])
        index++
        if(index == arr.length){
            clearInterval(myF)
        }
    },1000)
    
}