var express = require('express'),
    router = express.Router(),
    articleProvider = require('../db/articleprovider-mongodb').mongolabArticleProvider;

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

router.post('/addComment', function(req, res) {
    articleProvider.addCommentToArticle(req.param('_id'), {
        person: req.param('person'),
        comment: req.param('comment'),
        created_at: new Date()
       } , function( error, docs) {
           res.redirect('/blog/' + req.param('_id'))
       });
});

router.get('/:id', function(req, res) {
	console.log(req.params.id);
    articleProvider.findById(req.params.id, function(error, article) {
    	console.log(error);
        res.render('blog_show.jade', {
            title: article.title,
            article: article
        });
    });
});

module.exports = router;