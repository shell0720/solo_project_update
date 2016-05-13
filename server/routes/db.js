var mongoose = require("mongoose");


var mongoURI =
<<<<<<< HEAD
 process.env.MONGOLAB_URI ||
 process.env.MONGOHQ_URL ||
'mongodb://localhost/kappa_solo'||
 'mongodb://Michelle:ds013192.mlab.com:13192/heroku_q4vl9pg4';
=======
  //process.env.MONGOLAB_URI ||
  //process.env.MONGOHQ_URL ||
 //'mongodb://localhost/kappa_solo'||
 'mongodb://Xiaoran:123@ds013192.mlab.com:13192/heroku_q4vl9pg4';

>>>>>>> 40cfde870767457aceacaa1163621e75ee86f3f0

var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on("error", function(err){
    console.log("Mongo Connection Error: ", err);
});

MongoDB.once("open", function(err){
    console.log("Mongo Connection Open");
});

module.exports = MongoDB;
