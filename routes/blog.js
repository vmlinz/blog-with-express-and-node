var express = require('express'),
    router = express.Router(),
    ArticleProvider = require('../db/articleprovider-memory').ArticleProvider;

var articleProvider = new ArticleProvider();

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