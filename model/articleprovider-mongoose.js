var mongoose = require('mongoose');
mongoose.connect('mongodb://myblog:myblog@ds049288.mongolab.com:49288/myblog');

var Schema = mongoose.Schema;
var ObjectID = require('mongodb').ObjectID;

var ArticleSchema = new Schema({
	title:  String,
	body:   String,
	created_at: {type: Date, default: Date.now},
	comments: [{author : String,
		comment: String,
		created_at: {type: Date, default: Date.now}}]
});

var Article = mongoose.model('Article', ArticleSchema, 'articles');

ArticleProvider = function(){};

ArticleProvider.prototype.findAll = function(callback) {
	Article.find(callback);
};

ArticleProvider.prototype.findById = function(id, callback) {
	Article.findById(id, callback);
};

ArticleProvider.prototype.save = function(articles, callback) {
	if( typeof(articles.length)=="undefined")
		articles = [articles];

	Article.create(articles, callback);
};

ArticleProvider.prototype.addComment = function(id, comment, callback) {
	Article.findById(id, function (err, article) {
		article.comments.push(comment);
		article.save();

		callback(null, article);
	});
}

module.exports.ArticleProvider = ArticleProvider;
