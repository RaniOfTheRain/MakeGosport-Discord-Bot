const config = require('../config.json');

module.exports = async (client, member) => {
    client.channels.cache.get(config.channels.general).send(`⚙️ A new maker has entered the space. Welcome <@${member.id}>! ⚙️`)
}