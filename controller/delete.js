var Works = require('../models/works');

module.exports = function(req,res,next){
      console.log('deleting....');
      Works.findByIdAndRemove(req.params.id,function(err){
        if(err)throw err;
        Works.find({},function(err,works){
          if(err) throw err;
          res.json({collection:works});
        });
      });
};
