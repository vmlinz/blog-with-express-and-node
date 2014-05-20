var app = require('./helpers/app');

var should = require('should'),
	supertest = require('supertest');

describe('myblog', function () {
	it('should get list of blogs', function (done) {
		supertest(app)
		.get('/')
		.expect(200)
		.end(function (err, res) {
			res.status.should.equal(200);
			// it's important to call done() when test finished
			done();
		});
	});

	it('should return error for an invalid blog', function (done) {
		supertest(app)
		.get('/blog/')
		.expect(404)
		.end(function (err, res) {
			res.status.should.equal(404);
			done();
		});
	});
});