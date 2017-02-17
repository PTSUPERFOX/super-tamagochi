var express = require('express')
var router = express.Router()
var UsersController = require('../controllers/UsersController.js')

// ======= /api/users =====
router.get('/getstatus', UsersController.create)

router.get('/train', function (req, res, next) {
  res.send({status: 'ok'})
})

router.get('/eat', function (req, res, next) {
  res.send({status: 'ok'})
})

router.get('/sleep', function (req, res, next) {
  res.send({status: 'ok'})
})

router.get('/drink', function (req, res, next) {
  res.send({status: 'ok'})
})

module.exports = router
