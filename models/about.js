var mongoose = require('mongoose'),
    dbConfig = require('../config/database.js')
    mongoose.createConnection(dbConfig.url);
    Schema   = mongoose.Schema;


var aboutSchema = new Schema({
    name:String,
    school:String,
    description:String,
    program:String,
    program_skill:String,
    design:String,
    design_skill:String,
    art:String,
    art_skill:String,
});

module.exports = mongoose.model('About', aboutSchema);
