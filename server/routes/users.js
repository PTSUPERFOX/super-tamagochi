var express = require('express')
var router = express.Router()
var UsersController = require('../controllers/UsersController.js')
var logic = require('../controllers/logic.js')

// ======= /api/users =====

router.get('/getstatus', UsersController.list)

router.get('/getstatus/:id', UsersController.show)

router.post('/register', UsersController.create)

router.put('/update/:id', UsersController.update)

router.delete('/delete/:id', UsersController.remove)

router.put('/train', function (req, res, next) {
  res.send({status: 'ok'})
})

router.put('/eat', function (req, res, next) {
  res.send({status: 'ok'})
})

router.put('/sleep', function (req, res, next) {
  res.send({status: 'ok'})
})

router.put('/drink', function (req, res, next) {
  res.send({status: 'ok'})
})

router.get('/:id/train', logic.training)

module.exports = router
