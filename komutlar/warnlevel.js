const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Ne Cüretle Bunu Yapmaya Kalkışırsın Senin Bunu Yapmaya Yetkin Yok!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Bu Kişiyi Uyarmaya Yetkin Yok!");
  let warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> Adlı Kullanıcı ${warnlevel} Uyarı Almıştır.`);

}

module.exports.help = {
  name: "uyarılar"
}
