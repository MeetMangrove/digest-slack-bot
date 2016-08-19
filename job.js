var model = require('./model');
var config = require('./config');

var LIMIT = 20;

model.Message.find({}).sort({ votes: -1 }).limit(20).exec(function(err, msgs){
  fetchMessageContent(msgs, function(err, messages){
    var digest = messages.map(function(msg){
      return ' - ' + msg.date + ' - ' + msg.username + ': ' + msg.content;
    }).join('\n')

    // TODO: display the URL of each message in the #gen-bot channel
    // syntax: <nb_votes> :balloon: <URL>

    // will post the user, from "Gem Bot" (instead of slack's slackbot channel)
    config.bot.postMessageToUser(config.ADMIN_USERNAME, digest, { 'slackbot': true, icon_emoji: ':cat:' });

    config.bot.on('message', function(data) {
      console.log('message:', JSON.stringify(data));
      if (data.reaction !== REACTION_NAME) return;
      if (data.item.type !== 'message') {
        console.warn('type !== message'); // TODO
        return;
      }
      var query = { type: data.item.type, id: data.item.ts };
      var incr = votes[data.type];
      if (incr) {
        var update = { $inc: { votes: incr } };
        Message.findOneAndUpdate(query, update, { upsert: true }, function(err, doc){
          console.log('=> ', err || doc);
        });
      }
    });

  });
});
