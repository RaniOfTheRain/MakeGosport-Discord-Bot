const { MessageEmbed } = require('discord.js');
const config = require('../config.json');

module.exports.execute = async (client, message, args) => {
    const messageID = args[0];
    const entirePhrase = args.join(' ');
    const userMessage = entirePhrase.substring(entirePhrase.indexOf(' ') + 1);
    const user = message.member;

    if (user.roles.cache.has(config.roles.admin)) {
        const botMessage = new MessageEmbed()
            .setColor('#fcbf0f')
            .setTitle('⚙️ Admin Message ⚙️')
            .setDescription(userMessage);
        
        console.log(message.channel.messages.cache.get(messageID))//.edit(userMessage);
        message.delete(1500);
    } else {
        message.author.send('You do not have the admin role to use this command');
    };
};

module.exports.config = {
    name: 'edit',
    aliases: ['edit', 'change'],
    description: 'Allows admins to edit a message sent via the bot in the same channel',
    usage: ['edit']
}