const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {







    const sayMessage = args.join(" ");
 
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
    
    if(!sayMessage) return message.channel.send(":warning: `Lütfen Yazmamı İstediğinide Yaz!`");
    
    message.delete().catch(O_o=>{}); 
 
    message.channel.send(sayMessage);


  
  
  
  }

module.exports.help = {
    name: "yaz"
}
