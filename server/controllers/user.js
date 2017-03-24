// Load required packages
var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var verifyToken = require('../middleware/verifyToken');
var router = express.Router();

router.get('/register', function(req, res) {
    res.redirect('/register')
});

router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username, email: req.body.email }), req.body.password, function(err, user) {
        if (err) {
            return res.send(err)
        } else {
            verifyToken.createVerificationToken(user, req)
        }

        passport.authenticate('local')(req, res, function () {
            res.send(req.user)
        });
    });
});

router.get('/login', function(req, res) {
    res.redirect('/login')
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/')
});

router.get('/logout', function(req, res) {
    req.logout();
    res.send('ok');
});

router.get("/verify/:token", function (req, res, next) {
    var token = req.params.token;
    verifyToken.verifyUser(token, function(err) {
        if (err) return res.send("verification-failure");
        res.send("verification-success");
    });
});

module.exports = router;