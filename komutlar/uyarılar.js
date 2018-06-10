const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./lordbot/warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

        if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok`")
        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if(!wUser) return message.reply(":warning: `Kimin Uyarılarına Bakmak İstediğinide Gir`")
        let warnlevel = warns[wUser.id].warns;

        message.reply(`<@${wUser.id}> Adlı Kişinin **${warnlevel}** Uyarısı Bulunmaktadır!`);



        //kod bitiş
}

module.exports.help = {
    name: "uyarılar"
}
