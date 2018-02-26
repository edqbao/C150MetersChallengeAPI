var router = require('express').Router();
var mongoose = require('mongoose');
var Team = mongoose.model('Team');
var Workout = mongoose.model('Workout');
var User = mongoose.model('User');
var auth = require('../auth');

module.exports = router;
