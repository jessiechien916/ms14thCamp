var About = require('../models/about');

module.exports =function(req,res,next){
    var about = new About({
					name:req.body.name,
					school:req.body.school,
					description:req.body.description,
          program:req.body.program,
          program_skill:req.body.program_skill,
          design:req.body.design,
          design_skill:req.body.design_skill,
          art:req.body.draw,
          art_skill:req.body.draw_skill
    });

    about.save(function(err){
        if(err)throw err;

        About.find({},function(err,about){
            if(err)throw err;
            res.json({infos:about});
        });
    });
};
