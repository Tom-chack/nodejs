let currentTime =  function() {
    let data = new Date()
    let hour = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    let milsec = data.getMilliseconds()
    return " now time is " + hour  + " : "+min + " : "+sec +
     " : "+milsec
}
module.exports.currentTime = currentTime