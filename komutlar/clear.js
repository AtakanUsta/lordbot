const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!clear 15
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
  if(!args[0]) return message.channel.send(":warning: `Silinecek Mesaj Sayısınıda Yaz`");
  if(args[0]) > 100 return message.channel.send(":warning: `100'den Fazla Mesaj Silemezsin!`");
    
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`:white_check_mark: ${args[0]} Adet Mesaj Silindi! `).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "temizle"
}
