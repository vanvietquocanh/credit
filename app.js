var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
var infoAPI = require('./routes/infoAPI');

var indexRouter = require('./routes/index');
var ccMaturityRouter = require('./routes/get.ccMaturity');
var ccLoginAdminRouter = require('./routes/get.login.admin');
var signinRouter = require('./routes/signin');
var dashboardRouter = require('./routes/dashboard');
var introduceFriendRouter = require('./routes/post.introduceFriend');
var receiveEmailRouter = require('./routes/post.receiveEmail');
var registerLoanAdviceRouter = require('./routes/post.registerLoanAdvice');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/CCMaturity', ccMaturityRouter);
app.use('/introduce-friend', introduceFriendRouter);
app.use('/mailinfo', receiveEmailRouter);
app.use('/register-loan', registerLoanAdviceRouter);

app.use(session(
                { secret: 'coppycat',
                  resave: false,
                  saveUninitialized: false,
                  cookie:{
                    expires: new Date(253402300000000)
                  }
                }
              ));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new FacebookStrategy(infoAPI, function(accessToken, refreshToken, profile, done) {
      done(null, profile);
    })|| new LocalStrategy(function(username, password, done) {
        
    })
    )
passport.serializeUser((user, done)=>{
  done(null, user)
})
passport.deserializeUser((id, done)=>{
  done(null, id)
})
app.route("/facebook").get(passport.authenticate("facebook"));
app.use('/signin', signinRouter);
app.use('/dashboard', dashboardRouter);
app.use('/admin', ccLoginAdminRouter);


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
