var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Publish = new Schema({
  content: {type: String, required: true},
  title: {type: String, required: true},
  time: {type: Date, default:Date.now},
  weather: {type: String, required: true},
  status : {type: String, required: true},
  name : {type: String, required: true},
  date : {type: Date, required: true},
  user : {type: String, required : true},
});

module.exports = mongoose.model('Publish', Publish);
