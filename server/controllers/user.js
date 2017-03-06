// Load required packages
var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username, email: req.body.email }), req.body.password, function(err, user) {
        if (err) {
            return res.send(err)
        }

        passport.authenticate('local')(req, res, function () {
            res.send(req.user)
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.send(req.user)
});

router.get('/logout', function(req, res) {
    req.logout();
    res.send('ok');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;