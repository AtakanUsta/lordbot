const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            //başlangıç
            
            
            
            
            
            let reason = args.slice(1).join(" ");
            let user = message.mentions.users.first();
            let modlog = bot.channels.find(`name`, `lordlog`);
            
            if(!modlog) return message.reply(":warning: **lordlog** `Adında Bir Kanal Bulamıyorum Lütfen Kontrol Et!`");
            if(reason.lenght < 1) return message.reply(":warning: `Lütfen Bir Sebep Gir`");
            if(message.mentions.users.size < 1) return message.reply(":warning: `Lütfen Uyarmak İstediğin Kullanıcının İsminide Gir`").catch(console.error);
            
            
            const uyariembed = new Discord.RichEmbed()
            
            .setAuthor("~ U Y A R I ~", message.author.avatarURL)
            .setColor("#fc9300")
            .setTimestamp()
            .setField("Uyarılan", `${user.username}#${user.discriminator}`)
            .setField("Uyaran", `${message.author.user}#${message.author.discriminator}`);
            return bot.channels.get(modlog.id).sendEmbed(uyariembed);
            
            
            
            
            
            
            
            
            
            
            //bitiş

}

module.exports.help = {
    name: "uyar"
}
