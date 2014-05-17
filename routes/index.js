var express = require('express'),
    router = express.Router(),
    ArticleProvider = require('../db/articleprovider-mongodb').ArticleProvider,
    articleProvider = new ArticleProvider('myblog', 'ds049288.mongolab.com', '49288');

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
