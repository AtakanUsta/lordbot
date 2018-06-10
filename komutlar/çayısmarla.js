const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

                let user = message.mentions.users.first();
         if(message.mentions.users.size < 1) return message.reply(":warning: `Lütfen Çay Ismarlamak İstediğin Kullanıcının İsminide Gir`").catch(console.error);
        
     

        let menu2 = new Discord.RichEmbed()
            .setAuthor("MENÜ")
            .setDescription(`@${user.username}#${user.discriminator} Adlı Kişi ${user} Adlı Kişiye Çay Ismarladı`)
            .setColor("#00ff08")
            .setImage("http://mmatr.pe.hu/yemekresimleri/çay.jpg")

        let sohpet = bot.channels.find(`name`, `💬sohpet`);
        bot.channels.get(sohpet.id).sendEmbed(menu2);


        //kod bitiş
}

module.exports.help = {
    name: "çayısmarla"
}
