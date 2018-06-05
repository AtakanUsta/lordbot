const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Ne Cüretle Bunu Yapmaya Kalkışırsın Senin Bunu Yapmaya Yetkin Yok!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Kullanıcıyı Bulamıyorum.");
  if(wUser.hasPermission("MANAGE_ROLES")) return message.reply("Bu Kişiyi Uyarmaya Yetkin Yok!");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Uyarı")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Uyarılan Kişi", `<@${wUser.id}>`)
  .addField("Aldığı Uyarı Sayısı", warns[wUser.id].warns)
  //.addField("Sebep", reason);

  let warnchannel = message.guild.channels.find(`name`, "lordlog");
  if(!warnchannel) return message.reply("lordlog Adında Bir Metin Kanalı Bulamıyorum. Lütfen Oluştur veya Kontrol Et!");


  message.channel.send(warnEmbed);



  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("muted rolü oluşturmalısın");

    let mutetime = "10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> Adlı Kullanıcı 2 Uyarı Alarak 10Saniye Susturma Cezası Aldı`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> Adlı Kullanıcının Susturma Cezası Bitti`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 6){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> Adlı Kullancı 6 Uyarı Alarak Serverdan Banlandı!`)
  }

}

module.exports.help = {
  name: "uyar"
}
