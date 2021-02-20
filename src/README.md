# How to use DiscordBotLibrary.js

## Setup
First, you will need to install the latest Node.js at [their website](https://nodejs.org/en/) or use an online code site like [Repl.it](https://repl.it/). Next, you will need to download our JavaScript file and put it in your project folder. Then, do this:

```javascript
const dbl = require('./dbl.js');
```

This, will require [Discord.js](https://github.com/discordjs/discord.js/), and may be need to be installed by doing:
```bash
npm install discord.js
```

Once, you have it ready, you can try to use this code to make it work:
```javascript
const dbl = require('./dbl.js');

dbl.set_prefix('!');


dbl.set_status({
  status: "idle",
  activity: "The coolest bot in the world"
});

dbl.create_command('ping', function(message){
  dbl.send_message('pong', message.channel)
});

dbl.run(YOUR_TOKEN_HERE)
```
First, you need to import the code by doing this:
```javascript
const dbl = require('./dbl.js');
```
Second, you should set the prefix for all the future commands.
```javascript
dbl.set_prefix('!');
```
Then, you will want to set the status, for the bot for some extra flash, but to also describe the bot.
```javascript
dbl.set_status({
  status: "idle",
  activity: "The coolest bot in the world"
});
```
Next, you need to have a command. We will have a simple command; if you write, !ping, the bot will respond with pong.
```javascript
dbl.create_command('ping', function(message){
  dbl.send_message('pong', message.channel)
});
```
Finally, you need to find you token at the [Discord Developers Website](https://discord.com/developers/applications/me), and write this piece of code. Replace, "YOUR_TOKEN_HERE", with the token you find on the website.
```javascript
dbl.run(YOUR_TOKEN_HERE)
```
Then finally run your script, and you should have your bot come alive in Discord and when you write !ping in chat it will respond with pong.
