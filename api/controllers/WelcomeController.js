/**
 * WelcomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    welcome: function (req, res) {
        if (req.cookies.auth) {
            res.view("pages/welcome");
        }
        else {
            res.redirect("/arrivee/connect");
        }
    }

};

