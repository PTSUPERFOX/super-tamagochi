const users = require('../models/UsersModel')

const logic = {
  train: function(req, res, next){
    return {awesomeness: 2, hunger: (-2), fatigue: (-2), thirst: (-2)}
  },
  eat: function(req, res, next){
    return {hunger: 5, thirst: (-1)}
  },
  drink: function(req, res, next){
    return {thirst: 100}
  },
  sleep: function(req, res, next){
    return {fatigue: 100, hunger: (-10), thirst: (-10)}
  },
  rest: function(req, res, next){
    return {fatigue: 1}
  },
  training: function(req, res, next){
    let id = req.params.id
    let modifier = logic.train()
    users.findOne({_id: id}, function(err, data){
      data.hunger += modifier.hunger
      data.awesomeness += modifier.awesomeness
      data.fatigue += modifier.fatigue
      data.thirst += modifier.thirst
      res.send(data);
    })
  },
  eating: function(req, res, next) {

  }
}

module.exports = logic
