var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/balloon-bot');

var Message = mongoose.model('Message', {
  type: String,
  id: String,
  channel: String,
  votes: Number,
  broadcasted: { type: Boolean, default: false }
});

exports.Message = Message;
