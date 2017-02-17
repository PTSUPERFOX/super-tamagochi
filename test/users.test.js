const chai = require('chai')
const should = chai.should()
const chaiHTTP = require('chai-http')
const url = 'http://localhost:3000'
chai.use(chaiHTTP)

// ======= chai should test for /api/users =====

describe('API status and response', function () {
  describe('api/users/getstatus', function () {
    it('should return status 200 and an object', function (done) {
      chai.request(url)
        .get('/api/users/getstatus')
        .end(function (err, res) {
          res.should.have.status(200)
          res.body.should.be.an('object')
          done()
        })
    })
  })

  describe('api/users/train', function () {
    it('should return status 200 and an object', function (done) {
      chai.request(url)
        .get('/api/users/train')
        .end(function (err, res) {
          res.should.have.status(200)
          res.body.should.be.an('object')
          done()
        })
    })
  })

  describe('api/users/eat', function () {
    it('should return status 200 and an object', function (done) {
      chai.request(url)
        .get('/api/users/eat')
        .end(function (err, res) {
          res.should.have.status(200)
          res.body.should.be.an('object')
          done()
        })
    })
  })

  describe('api/users/sleep', function () {
    it('should return status 200 and an object', function (done) {
      chai.request(url)
        .get('/api/users/sleep')
        .end(function (err, res) {
          res.should.have.status(200)
          res.body.should.be.an('object')
          done()
        })
    })
  })

  describe('api/users/drink', function () {
    it('should return status 200 and an object', function (done) {
      chai.request(url)
        .get('/api/users/drink')
        .end(function (err, res) {
          res.should.have.status(200)
          res.body.should.be.an('object')
          done()
        })
    })
  })
})
