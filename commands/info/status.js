const { ClientUser } = require("discord.js")

module.exports = {
    name: "Status",
    description: "Changes account status",

    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send('`**Error:** No status specified`');

        client.user.setPresence({status: args[0]});
        message.channel.send(`**Status has been set to ${args[0]}**`)
    }}
