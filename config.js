var SlackBot = require('slackbots');

module.exports = {
  REACTION_NAME: process.env.REACTION_NAME || 'balloon',
  SLACK_NAME: process.env.SLACK_NAME || 'nomedu',
  SLACK_TOKEN: process.env.SLACK_TOKEN.substr(),
  DIGEST_CHANNEL: process.env.DIGEST_CHANNEL || 'balloon-bot',
  BOT_NAME: process.env.BOT_NAME || 'Balloon Bot',
  ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'adrienj'
};

// create a bot
module.exports.bot = new SlackBot({
    token: module.exports.SLACK_TOKEN, // TODO: Add a bot https://my.slack.com/services/new/bot and put the token
    name: module.exports.BOT_NAME
});
