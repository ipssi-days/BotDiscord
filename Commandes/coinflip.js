const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    function doRandHT() {
        var rand = ['C\'est PILE', 'C\'est FACE'];

        return rand[Math.floor(Math.random() * rand.length)];
    }
    //message.channel.send(doRandHT())
    const embed = {
        "title": `Je lance la pièce...`,
        "description": doRandHT(),
        "color": 7584788,
    };
    message.channel.send({ embed });

};

module.exports.help = {
    name: 'coinflip'
};