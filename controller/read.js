var Works = require('../models/works');

module.exports = function(req, res, next) {
	Works.findOne({ _id: req.params.id }, function(err, works) {
		if (err) throw err;
		console.log('read successifully!');
		res.json({collection:works});
	});
};
