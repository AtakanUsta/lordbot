const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {





    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
    


    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply(":warning: `Kicklenecek Kullanıcın İsmini Yaz`");
    if(!member.kickable) 
      return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
    
   
   
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "`Sebep Belirtilmemiş`";
    

    await member.kick(reason)
      .catch(error => message.reply(`:warning: Üzgünüm ${message.author} , Bir Hata Oluştu Lütfen Bunu Bot Kurucusuna(.botkurucu) Bildir : ${error}`));
    message.reply(`:white_check_mark: ${member.user.tag} Adlı Oyuncu ${message.author.tag} Tarafından Kicklendi | Sebep : ${reason}`);

  
  
  
  }

module.exports.help = {
    name: "kick"
}
