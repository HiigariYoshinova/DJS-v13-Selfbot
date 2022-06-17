const { Client, Collection } = require('discord.js-selfbot-v13');
const client = new Client();
const keepAlive = require("./server");

module.exports = client;
// GLOBAL VARIABLES
client.commands = new Collection();
client.config = require("./config.json");

for(let handler of  ["commands", "event"]) require(`./handlers/${handler}`)(client);

keepAlive();
client.login(client.config.token)