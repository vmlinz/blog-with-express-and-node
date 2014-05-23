var ArticleProvider = require('../data/articleprovider-memory.js').ArticleProvider;
var app = require('../../app')(new ArticleProvider());

module.exports = app;

