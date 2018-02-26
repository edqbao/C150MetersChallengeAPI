var mongoose = require('mongoose');

var WorkoutSchema = new mongoose.Schema({
  annotation: String,
  meters: Number,
  author: String,
  team: String
}, {timestamps: true});

// Requires population of author
WorkoutSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    meters: this.meters,
    annotation: this.annotation,
    createdAt: this.createdAt,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Workout', WorkoutSchema);
