var mongoose = require("mongoose");


var mongoURI =
 process.env.MONGOLAB_URI ||
 process.env.MONGOHQ_URL ||
 'mongodb://localhost/kappa_solo'||
 'mongodb://<dbuser>:<dbpassword>@ds011281.mlab.com:11281/heroku_2fqjbh41';

var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on("error", function(err){
    console.log("Mongo Connection Error: ", err);
});

MongoDB.once("open", function(err){
    console.log("Mongo Connection Open");
});

module.exports = MongoDB;
