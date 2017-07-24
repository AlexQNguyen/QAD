var mongoose = require('mongoose');

var DeepSchema = new mongoose.Schema({
  user_name: {type:String, required: true},
  thought:{type: String},
  description: {type: String},
  answers: [{content:String, author:String, detail:String, like:Number}],
  answer_count: {type:Number},
  likes: {type:Number}
},{timestamps: true})


mongoose.model("Deep", DeepSchema);
var Deep =  mongoose.model('Deep');
