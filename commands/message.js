const { DiscordAPIError, MessageEmbed } = require('discord.js');
const config = require('../config.json');

module.exports.execute = async (client, message, args) => {
    const discordChannel = args[0]; 
    const entirePhrase = args.join(' ');
    const userMessage = entirePhrase.substring(entirePhrase.indexOf(' ') + 1);
    const user = message.member;

    //client.channels.cache.get(discordChannel).send(user.roles);

    if (user.roles.cache.has(config.roles.admin)) {
        const botMessage = new MessageEmbed()
            .setColor('#fcbf0f')
            .setTitle('⚙️ Admin Message ⚙️')
            .setDescription(userMessage)
        client.channels.cache.get(discordChannel).send(botMessage);
        client.channels.cache.get(discordChannel).send(userMessage);
    } else {
        message.author.send('You do not have the admin role to use this command');
    };
};

module.exports.config = {
    name: 'message',
    aliases: ['message', 'send'],
    description: 'Allows admins to send a message via the bot to a particular channel',
    usage: ['message']
}