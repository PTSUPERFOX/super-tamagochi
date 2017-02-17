const chai = require('chai')
const should = chai.should()
const chaiHTTP = require('chai-http')
const url = 'http://localhost:3000'
chai.use(chaiHTTP)

// ======= chai should test for /api/users =====

function success (status) {
  let isSuccess = status >= 200 && status < 300 || status === 304
  if (isSuccess) return status
  else return '500 or 404'
}

describe('API status and response', function () {
  let createdId
  describe('api/users/register', function () {
    it('should return 200 <= status < 300 || status === 304 and an object', function (done) {
      chai.request(url)
        .post('/api/users/register')
        .send({
          name: 'Syanmil',
          hunger: 100,
          thirst: 100,
          fatigue: 100,
          awesomeness: 0
        })
        .end(function (err, res) {
          createdId = res.body._id
          res.body.name.should.equal('Syanmil')
          res.should.have.status(success(res.status))
          res.body.should.be.an('object')
          done()
        })
    })
  })

  describe('api/users/getstatus', function () {
    it('should return 200 <= status < 300 || status === 304 and an object', function (done) {
      chai.request(url)
        .get('/api/users/getstatus')
        .end(function (err, res) {
          res.body[0].name.should.equal('Syanmil')
          res.should.have.status(success(res.status))
          res.body.should.be.an('array')
          done()
        })
    })
  })

  describe('api/users/getstatus', function () {
    it('should return 200 <= status < 300 || status === 304 and an object', function (done) {
      chai.request(url)
        .put(`/api/users/update/${createdId}`)
        .send({
          hunger: 90,
          thirst: 90,
          fatigue: 90,
          awesomeness: 10
        })
        .end(function (err, res) {
          res.body.hunger.should.equal(90)
          res.should.have.status(success(res.status))
          res.body.should.be.an('object')
          done()
        })
    })
  })

  describe('api/users/delete/:id', function () {
    it('should return 200 <= status < 300 || status === 304', function (done) {
      chai.request(url)
        .delete(`/api/users/delete/${createdId}`)
        .end(function (err, res) {
          res.should.have.status(success(res.status))
          done()
        })
    })
  })

// describe('api/users/train', function () {
//   it('should return 200 <= status < 300 || status === 304 and an object', function (done) {
//     chai.request(url)
//       .get('/api/users/train')
//       .end(function (err, res) {
//         res.should.have.status(success(res.status))
//         res.body.should.be.an('object')
//         done()
//       })
//   })
// })
//
// describe('api/users/eat', function () {
//   it('should return 200 <= status < 300 || status === 304 and an object', function (done) {
//     chai.request(url)
//       .get('/api/users/eat')
//       .end(function (err, res) {
//         res.should.have.status(success(res.status))
//         res.body.should.be.an('object')
//         done()
//       })
//   })
// })
//
// describe('api/users/sleep', function () {
//   it('should return 200 <= status < 300 || status === 304 and an object', function (done) {
//     chai.request(url)
//       .get('/api/users/sleep')
//       .end(function (err, res) {
//         res.should.have.status(success(res.status))
//         res.body.should.be.an('object')
//         done()
//       })
//   })
// })
//
// describe('api/users/drink', function () {
//   it('should return 200 <= status < 300 || status === 304 and an object', function (done) {
//     chai.request(url)
//       .get('/api/users/drink')
//       .end(function (err, res) {
//         res.should.have.status(success(res.status))
//         res.body.should.be.an('object')
//         done()
//       })
//   })
// })
})
