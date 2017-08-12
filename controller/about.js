var About = require('../models/about');

module.exports = function(req, res, next) {
	About.findOne({ _id: req.params.id }, function(err, about) {
		if (err) throw err;
		console.log('read successifully!');
		res.json({infos:about});
	});
};
