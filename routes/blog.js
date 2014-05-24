module.exports = function (articleProvider) {
    var express = require('express'),
    router = express.Router();

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
        articleProvider.addComment(req.param('_id'), {
            author: req.param('author'),
            comment: req.param('comment'),
            created_at: new Date()
        } , function( error, docs) {
           res.redirect('/blog/' + req.param('_id'))
       });
    });

    router.get('/:id', function(req, res) {
        articleProvider.findById(req.params.id, function(error, article) {
            res.render('blog_show.jade', {
                title: article.title,
                article: article
            });
        });
    });

    return router;
}
