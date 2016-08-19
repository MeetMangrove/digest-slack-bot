var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Message = mongoose.model('Message', {
  type: String,
  id: String,
  votes: Number
});

exports.Message = Message;
