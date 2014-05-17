var express = require('express'),
    router = express.Router(),
    articleProvider = require('../db/articleprovider-mongodb').mongolabArticleProvider;

/* GET home page. */
router.get('/', function(req, res) {
    articleProvider.findAll(function(error, docs) {
    	res.render('index.jade', {
    		title: 'Blog',
    		articles:docs
    	});
    });
});

module.exports = router;
