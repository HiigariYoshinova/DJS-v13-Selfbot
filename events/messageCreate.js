const { MessageMentions } = require("discord.js");

module.exports = {
    run: (client, message) => {
        if(message.author.bot || !message.guild || MessageMentions.everyone ||!message.content.startsWith(client.config.prefix)) return;
        const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();

        let command = client.commands.get(cmd)
        if(!command) return;

        command.run(client, message, args)
        message.delete()
    }
              };
