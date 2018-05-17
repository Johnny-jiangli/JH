var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 连接数据库
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/haha');

// const mongoclient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/johnny";
// const dbname = "johnny";



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
var testRouterMid = require('./routes/testRoute');


var app = express();

//使用moment 这是一个js的库 包含了一些jQuery未实现的函数
app.locals.moment = require('moment');

//set locals
// app.locals.title= "JH";
// app.locals.email="jiangli450324@163.com";
// view engine setup

// mongoclient.connect(url,function (err,client) {
//     var db = client.db(dbname);
//     console.log(db)
    app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test',testRouter);
app.use('/t',testRouterMid);
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
// });
module.exports = app;
