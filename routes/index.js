var express = require('express'),
    router = express.Router(),
    ArticleProvider = require('../db/articleprovider-memory').ArticleProvider;

var articleProvider = new ArticleProvider();

/* GET home page. */
router.get('/', function(req, res) {
    articleProvider.findAll(function(error, docs) {
    	console.log(docs);
    	res.render('index.jade', {
    		title: 'Blog',
    		articles:docs
    	});
    });
});

module.exports = router;
