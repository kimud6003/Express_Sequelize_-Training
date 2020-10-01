var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var videoRouter = require('./routes/video');

var app = express();

const models = require('./models');
models.sequelize.sync()
  .then(() => {
    console.log('✓ DB 연결 ');
    console.log('  CTRL-C 로 스탑\n');
  })
  .catch(err => {
    console.error(err);
    console.log('✗ DB 연결오류');
    process.exit();
  });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 미들웨어 
app.use(helmet());
app.disable('x-powered-by');
app.use(cors());
app.use(logger('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/video', videoRouter);



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
