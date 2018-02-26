var router = require('express').Router();
var mongoose = require('mongoose');
var Team = mongoose.model('Team');
var Workout = mongoose.model('Workout');
var User = mongoose.model('User');
var auth = require('../auth');

router.post('/create', function(req, res, next){
  var team = new Team();

  team.teamName = req.body.team.teamName;
  team.description = req.body.team.description;
  team.members = req.body.team.members;

  team.save().then(function(){
    return res.json({team: team.toTeamJSON()});
  }).catch(next);
});

router.get('/teams', function(req, res, next){
  console.log(req.headers.id)
  Team.findById(req.headers.id).then(function(team){
    if (!team) { return res.sendStatus(401); }
    return res.json({team: team.toTeamJSON()});
  }).catch(next);
});

module.exports = router;
