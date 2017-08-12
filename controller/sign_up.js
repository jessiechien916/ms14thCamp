var Admin = require('../models/admin');

module.exports =function(req,res,next){
    var admin = new Admin({
        security:{
        username:req.body.security.username,
        password:req.body.security.password,
        }
    });

    admin.security.password = admin.generateHash(admin.security.password);

    admin.save(function(err){
        if(err)throw err;
        console.log(`success!`);
    });
};
