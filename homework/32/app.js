const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');

//Importing routes
const indexRouter = require('./routes/index');
const routeAuth = require('./routes/routeAuth');
const routeAdmin = require('./routes/routeAdmin');

//Storing session
//----> npm install redis connect-redis
//const redis = require('redis');
//let RedisStore = require('connect-redis')(session);
//let redisClient = redis.createClient();

//MongoDB connection
const mongoose=require(`mongoose`);
const {link}=require(`./config/index`);
mongoose.connect(link,{ useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
   if(err) throw err; console.log(`Connected!`);
})

//Create express APP
const app = express();

//Web Caching allows us to serve requests faster. 
//Some sensitive data might be cached on the client computer. 
//Even if we timeout the session, there might be a possibility that the data can be retrieved from the web cache. 
//To prevent this, we need to disable cache.
//Helmet.js is an Express library that can be used to secure our Express apps.
//The noCache method will set Cache-Control, Surrogate-Control, Pragma, and Expires HTTP headers for us.
//Alternatively, if the site has the requirement to be cached, at the very least, the Cache-Control header must be set to Cache-Control: no-cache="Set-Cookie, Set-Cookie2".
//   router.get('/', function(req, res, next) {
//     res.set('Cache-Control', "no-cache='Set-Cookie, Set-Cookie2'");
//     // Route Logic
//   });
// const helmet = require('helmet');
// const noCache = require('nocache');
// app.use(noCache());
// app.use(helmet());

//View engine setup, using EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//General middlewares. Parsing JSON and data from submitted forms
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Registering and initating sessions with cookies
//Traditionally, sessions are identifiers sent from the server and stored on the client-side. 
//On the next request, the client sends the session token to the server. 
//Using the identifier, the server can associate a request with a user.
app.use(cookieParser());
app.use(session({ 
  name: "ses_name", //default name is 'connect.sid'
  secret: "ses_secret", //there is no default value, this is a required parameter
  saveUninitialized: true, //A session is uninitialized when it’s new but not modified. Setting this to false reduces server storage usage and comply with laws that require permission before storing cookies.
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 365 * 1000
  },
  //store: new RedisStore({ client: redisClient, ttl: 86400}),
  resave: true //This may create race conditions when a client makes 2 parallel requests to our server and changes made to the session on one request may be overwritten when the other request ends.
}));

//Setting static files path /public/ for JS, CSS and imgaes.
app.use(express.static(path.join(__dirname, 'public')));

//Regsitering routes, base path /auth/ for /auth/login and /auth/register/
app.use('/', indexRouter);
app.use('/auth', routeAuth);
app.use('/admin', routeAdmin);

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

module.exports = app;
