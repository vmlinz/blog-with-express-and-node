var mongoose = require('mongoose');

mongoose.connect('mongodb://myblog:myblog@ds049288.mongolab.com:49288/myblog');

module.exports = mongoose.connection;