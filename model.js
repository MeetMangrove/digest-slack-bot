var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/balloon-bot');

var Message = mongoose.model('Message', {
  type: String,
  id: String,
  votes: Number,
  broadcasted: Boolean
});

exports.Message = Message;
