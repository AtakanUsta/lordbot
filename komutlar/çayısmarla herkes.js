const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
   
   
   
   
   
   
   
   
   
                let menu = new Discord.RichEmbed()
            .setAuthor("MENÜ")
            .setDescription(`@${message.author.username} Adlı Kişi Herkese Çay Ismarladı`)
            .setColor("#00ff08")
            .setImage("http://mmatr.pe.hu/yemekresimleri/çay.jpg")

        let sohpet = bot.channels.find(`name`, `💬sohpet`);
        message.channel.send(menu);
               
               
               
               
               
               
               
               }

module.exports.help = {
    name: "herkeseçayısmarla"
}
