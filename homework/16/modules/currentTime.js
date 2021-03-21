

module.exports.currentTime = function (){
    let date = new Date();
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    console.log(date.getMilliseconds());
    console.log(date.getTime());
};