// Load required packages
var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var verifyToken = require('../middleware/verifyToken');
var router = express.Router();

router.get('/register', function (req, res) {
    res.redirect('/register');
});

router.post('/register', function (req, res) {
    var user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    user.save(function (err) {
        if (err) {
            return res.send(err);
        } else {
            verifyToken.createVerificationToken(user, req)
        };

        passport.authenticate('local')(req, res, function () {
            res.send(req.user);
        });
    })
});

router.get('/login', function (req, res) {
    res.send('login');
});

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (!user) {
            return res.redirect('/login');
        };
        req.logIn(user, function (err) {
            return res.redirect('/');
        });
    })(req, res, next);
});

router.get('/logout', function (req, res) {
    req.logout();
    res.send('ok');
});

router.get("/verify/:token", function (req, res, next) {
    var token = req.params.token;
    verifyToken.verifyUser(token, function (err) {
        if (err) return res.send("verification-failure");
        res.send("verification-success");
    });
});

router.post('/changepass', function (req, res) { //test
    console.log(req.isAuthenticated())
})

module.exports = router;