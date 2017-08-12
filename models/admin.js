var mongoose = require('mongoose'),
    dbConfig = require('../config/database.js')
    mongoose.createConnection(dbConfig.url);
    Schema   = mongoose.Schema;
    bcrypt   = require('bcrypt-nodejs');

var userSchema = new Schema({
  security   :{
    username : String,
    password : String,
  }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function( password ) {
    return bcrypt.compareSync(password, this.security.password);
};
module.exports = mongoose.model('User', userSchema);
