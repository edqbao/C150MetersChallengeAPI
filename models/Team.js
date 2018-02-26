var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var TeamSchema = new mongoose.Schema({
  teamName: String,
  description: String,
  body: String,
  workouts: [String],
  members: [String]
}, {timestamps: true});

TeamSchema.plugin(uniqueValidator, {message: 'is already taken'});

TeamSchema.methods.toTeamJSON = function(){
  return {
    title: this.title,
    description: this.description,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

mongoose.model('Team', TeamSchema);
