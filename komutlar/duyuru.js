const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermissions("ADMINIASTOR")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
     
     bot.guild.member.sendMessage("Sakin Ol ! Bu Sadece Bir Duyuru Denemesi");
}

module.exports.help = {
    name: "duyuru"
}
