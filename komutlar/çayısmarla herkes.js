const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
   
   
   
   
   
   
   
   
   
                let menu = new Discord.RichEmbed()
            .setAuthor("MENÜ")
            .setDescription(`@${message.author.username} Adlı Kişi Herkese Çay Ismarladı`)
            .setColor("#00ff08")
            .setImage("http://mmatr.pe.hu/yemekresimleri/çay.jpg")

        let sohpet2 = bot.channels.find(`name`, `💬sohpet`);
        bot.channels.get(sohpet2.id).sendEmbed(menu);
               
               
               
               
               
               
               
               }

module.exports.help = {
    name: "herkeseçayısmarla"
}
