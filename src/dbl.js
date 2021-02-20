const Discord = require('discord.js');
const client = new Discord.Client();

function warn(warning){
  console.warn("\nWarning: " + warning)
}

function error(err){
  console.error("\nError: " + err);
  process.exit(1)
}

var dbl = {
  prefix: "",
  set_prefix: function(prefix){
    if(prefix !== undefined && prefix !== null && typeof prefix === "string" && prefix !== ""){
      this.prefix = prefix;
    }else{
      error("You have to have a valid prefix for any of the commands to work, please try again.")
    }
  },
  set_status: function(obj){
    client.on('ready', () => {
      if(obj.activity !== undefined && obj.activity !== null && typeof obj.activity === "string" && obj.activity !== ""){
        if(obj.status !== undefined && obj.status !== null && typeof obj.status === "string" && obj.status !== ""){
          client.user.setPresence({
            activity: {
              name: obj.activity != undefined ? obj.activity : ""
            },
            status: obj.status != undefined ? obj.status : "online"
          });
        }else{
          error("You need to have a string for your Status. Please choose a valid status for your bot.")
        }
      }else{
        error("You need to have a string for your Activity. Please choose a valid activity for your bot.")
      }
    });
  },
  give_client: function(){
    return client;
  },
  run: function(token){
    client.login(token);
  },
  create_command: function(name, func, prefix_reader = false){
    client.on('message', message => {
      if(prefix_reader == true){
        if(message.content.split(' ')[0] === name){
          func(message, message.content.split(' ')[1]);
        }
      }else{
        if(message.content.split(' ')[0] === this.prefix + name){
          func(message, message.content.split(' ')[1]);
        }
      }
    });
  },
  send_message: function(message, channel){
    if(message !== undefined && message !== null && typeof message === "string" && message !== ""){
      channel.send(message);
    }else{
      error("Your message must be a string and most have at least one character in it.")
    }
  },
  delete_message: function(channel, limit = 1){
    channel.bulkDelete(limit + 1);
  },
};

module.exports = dbl;const Discord = require('discord.js');
const client = new Discord.Client();

function warn(warning){
  console.warn("\nWarning: " + warning)
}

function error(err){
  console.error("\nError: " + err);
  process.exit(1)
}

var dbl = {
  prefix: "",
  set_prefix: function(prefix){
    if(prefix !== undefined && prefix !== null && typeof prefix === "string" && prefix !== ""){
      this.prefix = prefix;
    }else{
      error("You have to have a valid prefix for any of the commands to work, please try again.")
    }
  },
  set_status: function(obj){
    client.on('ready', () => {
      if(obj.activity !== undefined && obj.activity !== null && typeof obj.activity === "string" && obj.activity !== ""){
        if(obj.status !== undefined && obj.status !== null && typeof obj.status === "string" && obj.status !== ""){
          client.user.setPresence({
            activity: {
              name: obj.activity != undefined ? obj.activity : ""
            },
            status: obj.status != undefined ? obj.status : "online"
          });
        }else{
          error("You need to have a string for your Status. Please choose a valid status for your bot.")
        }
      }else{
        error("You need to have a string for your Activity. Please choose a valid activity for your bot.")
      }
    });
  },
  give_client: function(){
    return client;
  },
  run: function(token){
    client.login(token);
  },
  create_command: function(name, func, prefix_reader = false){
    client.on('message', message => {
      if(prefix_reader == true){
        if(message.content.split(' ')[0] === name){
          func(message, message.content.split(' ')[1]);
        }
      }else{
        if(message.content.split(' ')[0] === this.prefix + name){
          func(message, message.content.split(' ')[1]);
        }
      }
    });
  },
  send_message: function(message, channel){
    if(message !== undefined && message !== null && typeof message === "string" && message !== ""){
      channel.send(message);
    }else{
      error("Your message must be a string and most have at least one character in it.")
    }
  },
  delete_message: function(channel, limit = 1){
    channel.bulkDelete(limit + 1);
  },
};

module.exports = dbl;
