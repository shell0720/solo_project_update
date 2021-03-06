var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local');
var logout = require('express-passport-logout');
//models
var User = require('./models/user');

//routes
var db = require("./routes/db");
var index = require('./routes/index');
var register = require('./routes/register');
var user = require('./routes/user');
var data = require('./routes/data');

app.use(session({
    secret: "secret",
    key: "user",
    resave: true,
    s: false,
    saveUninitialized: false,
    cookie: {maxAge: 600000000, secure: false}

}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());




//PASSPORT SESSION
passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err) done(err);
        done(null, user);
    });
});

passport.use("local", new localStrategy({
      passReqToCallback : true,
      usernameField: 'username'
    }, function(req, username, password, done){
        User.findOne({username: username}, function(err,user){
            if(err) throw err;
            if(!user){
              return done(null, false, {message: "Incorrect username or password"});
            }

            user.comparePassword(password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                  return done(null, user);
                } else {
                  done( null, false, {message: "Incorrect username or password"});
                }
            });
        });
    }
));
//logout
app.get('/logout', function(req,res){
  console.log("logging out");
  req.logout();
  res.redirect('/');
});

app.use("/register", register);
app.use("/user", user);
app.use("/data", data);
app.use("/", index);

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
