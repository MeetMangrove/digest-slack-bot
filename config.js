var SlackBot = require('slackbots');

exports = {
  REACTION_NAME: 'gem',
  SLACK_NAME: 'nomedu',
  SLACK_TOKEN: process.env.SLACK_TOKEN,
  DIGEST_CHANNEL: process.env.DIGEST_CHANNEL || 'balloon-bot',
  BOT_NAME: 'Gem Bot',
  ADMIN_USERNAME: 'adrienj'
};

// create a bot
exports.bot = new SlackBot({
    token: exports.SLACK_TOKEN, // TODO: Add a bot https://my.slack.com/services/new/bot and put the token
    name: exports.BOT_NAME
});
