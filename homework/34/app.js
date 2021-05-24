require(`dotenv`).config();

const mongoose = require('mongoose');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Import Routers
const indexRouter = require('./routes/index');
const authRouter = require('./routes/routeAuth');

///////////////////////////////
const app = express(); ////////
///////////////////////////////

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Database connection
require('./config/db');

//Passport initialization
require('./config/pass')(passport);
app.use(passport.initialize());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Local Middlewares
const localVariables = require('./middlewares/site');
app.use(localVariables);

// Routers
app.use('/', indexRouter);
app.use('/auth', authRouter);

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
