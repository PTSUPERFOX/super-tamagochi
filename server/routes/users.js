var express = require('express')
var router = express.Router()
var UsersController = require('../controllers/UsersController.js')

// ======= /api/users =====

router.get('/getstatus', UsersController.list)

router.post('/register', UsersController.create)

router.put('/update/:id', UsersController.update)

router.delete('/delete/:id', UsersController.remove)

// router.put('/train', function (req, res, next) {
//   res.send({status: 'ok'})
// })
//
// router.put('/eat', function (req, res, next) {
//   res.send({status: 'ok'})
// })
//
// router.put('/sleep', function (req, res, next) {
//   res.send({status: 'ok'})
// })
//
// router.put('/drink', function (req, res, next) {
//   res.send({status: 'ok'})
// })

module.exports = router
