var Works = require('../models/works');

module.exports = function(req,res,next){
      console.log('querying....');
      Works.find({},function(err,works){
        if(err)throw err;
        res.json({collection:works});
      });
};
