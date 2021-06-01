const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');

const routeIndex = require('./routes/index');
const routeAuth = require('./routes/routeAuth');

const app = express();
const server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Local Middlewares
const {localVariables} = require('./middlewares/site');
app.use(localVariables);

//Socket.io ///////////////////////////////////////
const {buildMessage, socketUser} = require('./controllers/controlMessage');
const {Server} = require('socket.io');
const io = new Server(server);

//app.set("io", io);

io.use( async (socket, next) =>{
  try{
    socket.user = await socketUser( socket.handshake.auth.token );
    socket.room = socket.handshake.query.room;
    next();
  } catch(e){
    next(e);
  }
});


io.on('connection', (socket) => {

    //socket.join(user._id);
    //io.to(user._id).emit();
    //io.sockets.in().emit() and socket.broadcast.to().emit()
    //socket.broadcast.to broadcasts to all sockets in the given room, except to the socket on which it was called while io.sockets.in broadcasts to all sockets in the given room.

    // all sockets in the main namespace
    // const ids = await io.allSockets();

    // // all sockets in the main namespace and in the "user:1234" room
    // const ids = await io.in("user:1234").allSockets();

    // // all sockets in the "chat" namespace
    // const ids = await io.of("/chat").allSockets();

    // // all sockets in the "chat" namespace and in the "general" room
    // const ids = await io.of("/chat").in("general").allSockets();


    //Connectioned! ------------------------------------------------------------------------------LOG
    console.log('user connection: ' + socket.id);
    console.log('Room: ' + socket.room);

    
    if(socket.user && socket.room){

        let user = socket.user;

        socket.join(socket.room);
        //socket.leave(room);

        // socket.on('join room', (room) => {
        //     //Leave other rooms
        //     if(socket.room) socket.leave(socket.room);
        //     socket.room = room;
        //     //Join to the new room
        //     socket.join(room);
        //     //notify the new room
        //     socket.emit('new message', buildMessage({text: `Welcome ${user.username} to room ${socket.room}!`, room: socket.room}));
        //     socket.broadcast.to(socket.room).emit('new message', buildMessage({text: `${user.username} has joined to room ${room}`, room: socket.room}));
        //     console.log(socket.rooms);
        // });

        //Update online users list for all users ------------------------------------------------EMIT ALL
        let onlineUsers = new Set();
        for( let [$id, $socket] of io.of('/').sockets ){
          if($socket.user) onlineUsers.add(JSON.stringify($socket.user));
        }
        onlineUsers = [...onlineUsers].map( u => JSON.parse(u));
        io.emit('new online', onlineUsers);

        //Broadcast: a new user in the chat -----------------------------------------------------EMIT SELF / BROADCAST
        //socket.emit('new message', buildMessage({text: `Welcome ${user.username}!`}));
        socket.emit('new message', buildMessage({text: `Welcome ${user.username}!`, room: socket.room}));
        socket.broadcast.to(socket.room).emit('new message', buildMessage({text: `${user.username} has joined to room ${socket.room}`, room: socket.room}) );
        //socket.broadcast.to('room').emit('new message', buildMessage({text: `${user.username} has joined the chat`}) );

        //Get message from client ---------------------------------------------------------------ON
        socket.on('new message', (message) => {
          //Emit all users about a new message
          io.to(socket.room).emit('new message', buildMessage({text: message, room: socket.room}, {username: user.username}));
          console.log('new message: [' + message + ']');
        });

        //Disconencted! -------------------------------------------------------------------------ON 
        socket.on('disconnect', async () => {
          socket.broadcast.to(socket.room).emit('new message', buildMessage({text: `${user.username} has left`, room: socket.room}));
          console.log('disconnected: ' + socket.id);
          //let {size} = await io.of('/').in(socket._id).allSockets();
          //console.log(size);
          //if( Number(size) === 0 ){
            //socket.broadcast.to(room).emit('new message', buildMessage({text: `${user.username} has left`}));
            //console.log('disconnected: ' + socket.id);
          //}
        });

    }
    
});


// base routers
app.use('/', routeIndex);
app.use('/auth', routeAuth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = {app, server};
