var About = require('../models/about');

module.exports = function(req, res, next) {
	About.findOneAndUpdate({ _id: req.params.id }, req.body, function(err, about) {
		if (err) throw err;
		console.log('update successfully!');
		About.findOne({ _id: req.params.id }, function(err, about) {
			if (err) throw err;
			console.log(req.body);
			console.log('read successifully!');
			res.json({infos:about});
		});
	});
};
