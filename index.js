var path               = require ('path'),
    express            = require('express'),
    webpack            = require('webpack'),
    bodyParser         = require('body-parser'),
    cookieParser       = require('cookie-parser'),
    mongoose           = require('mongoose'),
    passport           = require('passport'),
    LocalStrategy      = require('passport-local').Strategy;
    session            = require('express-session'),
    flash              = require('connect-flash'),
    morgan             = require('morgan'),
    webpackMiddleware  = require('webpack-dev-middleware'),
    routes             = require('./routers/index'),
    config             = require('./webpack.config.js'),
    port               = process.env.PORT||3000;

const              app = express(),
              complier = webpack(config);



//--------express setting--------------------------------
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'/public')));
app.use(webpackMiddleware(complier));
app.use(bodyParser.urlencoded({extended: true , limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

//--------passport config---------------------------------
app.use(session({secret:'whatthefuckisthis'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use('/',routes);


//---------DB config-------------------------------------
var User = require('./models/admin');


passport.use(new LocalStrategy(
  function(username,password,done){
    console.log(username);
    User.findOne({'security.username':username},function(err,user){
      console.log(user);
      if(err){console.log(2);return done(err);}
      if(!user){
        console.log('wrong user');
        return done(null,false,{ message: 'Incorrect username.' });
      }
      if(!user.validPassword(password)){
        console.log(4);
        return done(null,false, { message: 'Incorrect password.' });
      }
      console.log(5);
      return done(null,user);
    });
  })
);

passport.serializeUser( function(user, done) {
  return done(null, user);
});

passport.deserializeUser( function(user, done) {
  return done(null, user);
});

function isLogin(req, res, next){
  if(req.isAuthenticated()){
      res.send('logged');
  }res.send('not logged')
};

app.post('/api/login',
    passport.authenticate('local',{
              successFlash: 'sucess',
              failureRedirect: '/fail' }),
    function(req, res) {
    //Login success function
    console.log(`yolo`);
    req.session.username = req.user.username;
    req.session._id = req.user.id;
    res.redirect('/');
});

app.get('/logout',function(req, res) {
    //Login success function
    console.log(`yoloooo`);
    req.logout();
    res.redirect('/');
});

app.get('/isLogin',isLogin);



app.listen(port);
