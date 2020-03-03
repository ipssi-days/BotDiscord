const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    message.channel.send(`Voici les commandes disponibles : \n !ping --- renvoi le delai en ms entre toi et le bot. \n !coinflip --- renvoi PILE ou FACE`);

};

module.exports.help = {
    name: 'help'
};