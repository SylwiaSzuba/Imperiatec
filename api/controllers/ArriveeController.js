/**
 * ArriveeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: function (req, res) {
        Arrivee.find({}).exec(function (err, arrivee) {
            if (err) {
                console.log("err")
                return res.send(500, { error: "Database Error" });
            }
            console.log(err);
            return res.view('arrivee/list', { data: arrivee });
        });
    },
    add: function (req, res) {
        res.view('add');
    },
    create: function (req, res) {
        var nom = req.param("nom");
        var prenom = req.param("prenom");
        var date = req.param("date");
        var heure = req.param("heure");
        var email = req.param("email");

        Arrivee.create({ nom: nom, prenom: prenom, date: date, heure: heure, email: email }).exec(function (err) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            res.redirect('/arrivee/list');
        });
    },
    delete: function (req, res) {
        Arrivee.destroy({ id: req.param("id") }).exec(function (err) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            res.redirect('/arrivee/list');
        });
        return false;
    },
    edit: function (req, res) {
        Arrivee.findOne({ id: req.param("id") }).exec(function (err, arrivee) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            res.view("edit", { arrivee: arrivee });
        });
    },
    update: function (req, res) {
        var nom = req.param("nom");
        var prenom = req.param("prenom");
        var date = req.param("date");
        var heure = req.param("heure");
        var email = req.param("email");

        Arrivee.update({ id: req.param("id") }, { nom: nom, prenom: prenom, date: date, heure: heure, email: email }).exec(function (err) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            res.redirect('/arrivee/list');
        });
        return false;
    },
    

};

