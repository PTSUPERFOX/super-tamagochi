var UsersModel = require('../models/UsersModel.js');

/**
 * UsersController.js
 *
 * @description :: Server-side logic for managing Userss.
 */
module.exports = {

    /**
     * UsersController.list()
     */
    list: function (req, res) {
        UsersModel.find(function (err, Userss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Users.',
                    error: err
                });
            }
            return res.json(Userss);
        });
    },

    /**
     * UsersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        UsersModel.findOne({_id: id}, function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Users.',
                    error: err
                });
            }
            if (!Users) {
                return res.status(404).json({
                    message: 'No such Users'
                });
            }
            return res.json(Users);
        });
    },

    /**
     * UsersController.create()
     */
    create: function (req, res) {
        var Users = new UsersModel({			name : req.body.name,			hunger : req.body.hunger,			thirst : req.body.thirst,			fatigue : req.body.fatigue,			awesomeness : req.body.awesomeness
        });

        Users.save(function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Users',
                    error: err
                });
            }
            return res.status(201).json(Users);
        });
    },

    /**
     * UsersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        UsersModel.findOne({_id: id}, function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Users',
                    error: err
                });
            }
            if (!Users) {
                return res.status(404).json({
                    message: 'No such Users'
                });
            }

            Users.name = req.body.name ? req.body.name : Users.name;			Users.hunger = req.body.hunger ? req.body.hunger : Users.hunger;			Users.thirst = req.body.thirst ? req.body.thirst : Users.thirst;			Users.fatigue = req.body.fatigue ? req.body.fatigue : Users.fatigue;			Users.awesomeness = req.body.awesomeness ? req.body.awesomeness : Users.awesomeness;			
            Users.save(function (err, Users) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Users.',
                        error: err
                    });
                }

                return res.json(Users);
            });
        });
    },

    /**
     * UsersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        UsersModel.findByIdAndRemove(id, function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Users.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
