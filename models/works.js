var  mongoose = require('mongoose'),
     dbConfig = require('../config/database.js')
     mongoose.connect(dbConfig.url);
     Schema   = mongoose.Schema;

var workSchema = new Schema({
     title:String,
     description:String,
     thumb:String,
     screenShot:String,
     screenShot1:String,
     work:String,
     link:String,
});

module.exports = mongoose.model('work',workSchema);
