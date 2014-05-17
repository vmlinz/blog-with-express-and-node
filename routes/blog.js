var express = require('express'),
    router = express.Router(),
    ArticleProvider = require('../db/articleprovider-mongodb').ArticleProvider,
    articleProvider = new ArticleProvider('myblog', 'ds049288.mongolab.com', '49288');

/* GET new blog page. */
router.get('/new', function(req, res) {
	res.render('blog_new.jade', {
		title: 'New Post'
	});
});

// POST a new blog with title and body
router.post('/new', function(req, res) {
	articleProvider.save({
		title: req.param('title'),
		body: req.param('body')
	}, function(error, docs) {
		res.redirect('/');
	});
});

module.exports = router;