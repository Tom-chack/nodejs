const {buildMessage} = require('../controllers/controlMessage');

module.exports = function (io) {

    
    

}




// socket.on("new user", function (data) {
//     socket.userId = data;
//     activeUsers.add(data);
//     io.emit("new user", [...activeUsers]);
// });

// socket.on("disconnect", () => {
//     activeUsers.delete(socket.userId);
//     io.emit("user disconnected", socket.userId);
// });

// socket.on("typing", function (data) {
//     socket.broadcast.emit("typing", data);
// });

// inputField.addEventListener("keyup", () => {
//     socket.emit("typing", {
//       isTyping: inputField.value.length > 0,
//       nick: userName,
//     });
// });

// socket.on("typing", function (data) {
//     const { isTyping, nick } = data;
//     if (!isTyping) {
//         fallback.innerHTML = ""; return;
//     }
//     fallback.innerHTML = `<p>${nick} is typing...</p>`;
// });