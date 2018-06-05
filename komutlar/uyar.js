const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            //başlangıç
            
            
            
            
            
            let reason = args.slice(1).join(" ");
            let user = message.mentions.users.first();
            let modlog = bot.channels.find(`name`, `lordlog`);
            
            if(!modlog) return message.reply(":warning: **lordlog** `Adında Bir Kanal Bulamıyorum Lütfen Kontrol Et!`");
            if(message.mentions.users.size < 1) return message.reply(":warning: `Lütfen Uyarmak İstediğin Kullanıcının İsminide Gir`").catch(console.error);
            
            
            
            
            
            
            
            
            
            
            
            //bitiş

}

module.exports.help = {
    name: "uyar"
}
