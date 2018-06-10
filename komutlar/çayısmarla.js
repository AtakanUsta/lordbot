const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç


        let menu = new Discord.RichEmbed()
            .setAuthor("MENÜ")
            .setDescription(`${message.author.username} Adlı Kişi Herkese Çay Ismarladı (şakire yok)`)
            .setColor("#00ff08")
            .setImage("http://mmatr.pe.hu/yemekresimleri/çay.jpg")

        let modlog = bot.channels.find(`name`, `💬sohpet`);
        modlog.channel.send(menu);


        //kod bitiş
}

module.exports.help = {
    name: "çayısmarla"
}
