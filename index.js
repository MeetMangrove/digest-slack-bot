var config = require('./config')
var model = require('./model');

config.bot.on('start', function() {
  console.log('bot started.');
  // define channel, where bot exist. You can adjust it there https://my.slack.com/services
  //bot.postMessageToChannel('general', 'meow!', { icon_emoji: ':cat:' });
});

// slack handle: reaction

config.bot.on('message', function(data) {
  var votes = {
    reaction_added: 1,
    reaction_removed: -1,
  };
  console.log('message:', JSON.stringify(data));
  if (data.reaction !== config.REACTION_NAME) return;
  if (data.item.type !== 'message') {
    console.warn('type !== message'); // TODO
    return;
  }
  var query = { type: data.item.type, id: data.item.ts };
  var incr = votes[data.type];
  if (incr) {
    var update = {
      $inc: { votes: incr },
      channel: data.item.channel
    };
    model.Message.findOneAndUpdate(query, update, { upsert: true, new: true }, function(err, doc){
      console.log('findOneAndUpdate=> ', err || doc);
    });
  }
});

// dummy web server (required by heroku)

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port ' + (process.env.PORT || 3000));
});
