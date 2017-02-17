const users = require('../models/UsersModel')

const logic = {
  train: function(req, res, next){
    return {awesomeness: 2, hunger: -2, fatigue: -2, thirst: -2}
  },
  eat: function(req, res, next){
    return {hunger: 5, thirst: -1}
  },
  drink: function(req, res, next){
    return {thirst: 100}
  },
  sleep: function(req, res, next){
    return {fatigue: 100, hunger: -10, thirst: -10}
  },
  rest: function(req, res, next){
    return {fatigue: 1}
  }
}

module.exports = logic
