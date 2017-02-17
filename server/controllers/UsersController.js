var UsersModel = require('../models/UsersModel.js')
const cron = require('node-cron')

module.exports = {
  create: function (req, res) {
    var Users = new UsersModel({
      name: req.body.name,
      hunger: req.body.hunger,
      thirst: req.body.thirst,
      fatigue: req.body.fatigue,
      awesomeness: req.body.awesomeness,
      logout: Date.now()
    })

    Users.save(function (err, Users) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Users',
          error: err
        })
      }
      return res.status(201).json(Users)
    })
  },

  list: function (req, res) {
    UsersModel.find(function (err, Users) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Users.',
          error: err
        })
      }
      return res.json(Users)
    })
  },

  show: function (req, res) {
    var id = req.params.id
    UsersModel.findOne({_id: id}, function (err, Users) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Users.',
          error: err
        })
      }
      if (!Users) {
        return res.status(404).json({
          message: 'No such Users'
        })
      }
      return res.json(Users)
    })
  },

  update: function (req, res) {
    var id = req.params.id
    UsersModel.findOne({_id: id}, function (err, Users) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Users',
          error: err
        })
      }
      if (!Users) {
        return res.status(404).json({
          message: 'No such Users'
        })
      }

      Users.name = req.body.name ? req.body.name : Users.name;      Users.hunger = req.body.hunger ? req.body.hunger : Users.hunger;      Users.thirst = req.body.thirst ? req.body.thirst : Users.thirst;      Users.fatigue = req.body.fatigue ? req.body.fatigue : Users.fatigue;      Users.awesomeness = req.body.awesomeness ? req.body.awesomeness : Users.awesomeness
      Users.save(function (err, Users) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Users.',
            error: err
          })
        }

        return res.json(Users)
      })
    })
  },

  remove: function (req, res) {
    var id = req.params.id
    UsersModel.findByIdAndRemove(id, function (err, Users) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Users.',
          error: err
        })
      }
      return res.status(204).json()
    })
  },

  logout: function (req, res) {
    UsersModel.findOneAndUpdate({
      _id: '58a6dfd3b6b34724df3e4464'
    }, {
      $set: {
        logout: Date.now()
      }
    }, { new: true }, function (err, data) {
      if (err) throw error
      else return res.json(data)
    })
  },

  login: function (req, res) {
    UsersModel.findOne({
      name: req.body.name
    }, function (err, data) {
      let diff = Date.now() - data.logout
      diff = Math.floor(diff / 1000 / 30)
      var hunger = data.hunger - diff
      var thirst = data.thirst - diff
      var fatigue = data.thirst + diff
      UsersModel.findOneAndUpdate({
        name: req.body.name
      }, {
        $set: {
          hunger: hunger,
          thirst: thirst,
          fatigue: fatigue
        }
      } {new: true}, function (err, data) {
        if (err) throw error
        else return res.json(data)
      })
    })
  }
}
