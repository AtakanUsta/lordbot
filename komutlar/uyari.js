const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply(" :warning: `Bunu Yapamazsın!`");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply(" :warning: `Kullanıcıyı Bulamıyorum!` ");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply(" :warning: `Bu Yetkiliyi Uyaramazsın` ");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Uyarılan", `<@${wUser.id}>`)
  .addField("Uyaran", message.channel)
  .addField("Aldığı Uyarı Sayısı", warns[wUser.id].warns)
  .addField("Uyarı Sebebi", reason);

  let warnchannel = message.guild.channels.find(`name`, "lordlog");
  if(!warnchannel) return message.reply(" :warning: **lordlog** `Adında Bir Metin Kanalı Göremiyorum Lütfen Kontrol Et Veya Oluştur` ");

  warnchannel.send(warnEmbed);

  
     // eğer bukarar uyarısı olursa şu olsun mekanı :D
  //if(warns[wUser.id].warns == 2){
//    let muterole = message.guild.roles.find(`name`, "muted");
//    if(!muterole) return message.reply("You should create that role dude.");
//
//    let mutetime = "10s";
//    await(wUser.addRole(muterole.id));
//    message.channel.send(`<@${wUser.id}> has been temporarily muted`);
//
//    setTimeout(function(){
//      wUser.removeRole(muterole.id)
//      message.reply(`:white_check_mark: @${wUser.id}> `Uyarı ile Verilen Susturma Cezası Bitti` `)
//    }, ms(mutetime))
  //}
  //if(warns[wUser.id].warns == 6){
    //message.guild.member(wUser).ban(reason);
//    message.reply(`<@${wUser.id}> 6 Uyarı Aldığı İçin Banlandı`)
//  }

}

module.exports.help = {
  name: "uyar"
}
