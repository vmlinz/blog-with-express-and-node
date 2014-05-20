module.exports = function (articleProvider) {
	var express = require('express'),
	router = express.Router();

	/* GET home page. */
	router.get('/', function(req, res) {
		articleProvider.findAll(function(error, docs) {
			res.render('index.jade', {
				title: 'Blog',
				articles: docs
			});
		});
	});

	return router;
}
