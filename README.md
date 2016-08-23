# digest-slack-bot

When invited to your Slack channels, this bot identifies messages that were added a specific reaction (e.g. a balloon), and shares a weekly digest of messages with the most of those reactions.

It is used in the Mangrove Friends community for staying in the loop, and know about the week's highlights.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Setup

1. Deploy this project to heroku using the button above (this will clone the repo in a new instance, install the scheduler and mongolab add-ons, and start index.js)
2. When it's done, create the bot in your Slack account's configuration:
  - go to https://my.slack.com/services/new/bot
	- make sure that you selected the right Slack account, from the top-right selector
	- give your bot a username (e.g. balloon)
	- keep a copy of the provided token
	- confirm the creation of this bot
3. Go to the settings page of your heroku instance, click on "Reveal Config Vars", then make sure that:
  - the `MONGODB_URI` environment variable is set to your mongodb instance,
	- `SLACK_TOKEN` contains the token you created at step 2
  - and set the other required environment variables (see below)
4. Setup the scheduled job:
  - go back to the "Overview" tab of your heroku instance's settings
	- click on the "Heroku Scheduler" add-on
	- add the following job: `node job.js`
	- select the periodicity and time when you want to receive the digest
5. Restart the heroku instance
6. Invite the bot to the channels you want it to listen to

## Required environment variables

- `SLACK_TOKEN` (mandatory, see setup process above)
- `SLACK_NAME`: name of your Slack account (default: `nomedu`)
- `BOT_NAME`: name of your bot on Slack (default: `Balloon Bot`)
- `DIGEST_CHANNEL`: name of the Slack channel in which the weekly digest will be shared
- `MONGODB_URI`, default: `mongodb://localhost:27017/balloon-bot`
- `REACTION_NAME`, default: `balloon`

## Contributors

- Francesco Occhipinti
- Adrien Joly

## Links for reference

- [heroku's deploy url](https://heroku.com/deploy?template=https://github.com/meetmangrove/digest-slack-bot)
- [heroku's app.json schema](https://devcenter.heroku.com/articles/app-json-schema)
- [mongoose guide](http://mongoosejs.com/docs/guide.html)
- [sample messages](https://docs.google.com/document/d/191BpoW_IUmyE7oayg-uOEDFbqdmNYTKeYzFZoIqjE-U/edit)
