const config = require('../config.json');

module.exports = async (client, message) => {

    if (!message.guild || message.author.bot) return;
    const args = message.content.split(/\s+/g); 
    const command = 
        message.content.startsWith(config.prefix) && 
        args.shift().slice(config.prefix.length).toLowerCase();
    
    if (command) {
        const commandfile = 
            client.commands.get(command) || 
            client.commands.get(client.aliases.get(command));

        if (commandfile) {
            commandfile.execute(client, message, args);
        }
    }
}