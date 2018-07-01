const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermissions("ADMINIASTOR")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
     
     let yazi = args[0]
     let yazi2 = args[1]
     
     
     let embed = new Discord.RichEmbed()
     .setAuthor(yazi)
     .setDescription(yazi2)
     
}

module.exports.help = {
    name: "embed"
}
