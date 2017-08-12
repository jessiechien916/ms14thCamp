var Works = require('../models/works');

module.exports =function(req,res,next){
    var works = new Works({
        title:req.body.title,
        description:req.body.description,
        thumb:req.body.thumb,
        screenShot:req.body.screenShot,
        screenShot1:req.body.screenShot1,
        work:req.body.work,
        link:req.body.link,
    });
    console.log(works);
    works.save(function(err){
        if(err)throw err;

        Works.find({},function(err,works){
            if(err)throw err;
            res.json({collection:works});
        });
    });
};
