exports = {
  REACTION_NAME: 'gem',
  SLACK_TOKEN: 'xoxb-71052224580-KLL51K43SS8rEeTIYARYk0PM',
  BOT_NAME: 'Gem Bot',
  ADMIN_USERNAME: 'adrienj'
};

// create a bot
exports.bot = new SlackBot({
    token: SLACK_TOKEN, // TODO: Add a bot https://my.slack.com/services/new/bot and put the token 
    name: BOT_NAME
});
