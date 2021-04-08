/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var passport = require('passport');
module.exports = {

    login: function (req, res) {
        var email = req.param("email");
        var password = req.param("password");

        if (email == "test" && password == "motdepasse") {
            res.cookie("auth", true);
            res.redirect('/arrivee/welcome');
        }
        else {
            res.redirect('/arrivee/connect');
        }
    },
    signup: function (req, res) {
        var email = req.param("email");
        var password = req.param("password");

        User.create({ email: email, password: password }).exec(function (err) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            res.redirect('/');
        });
    },
    logout: function (req, res) {
        req.logout();
        res.send('logout successful');
    }
};

