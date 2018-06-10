const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç



        let menu = new Discord.RichEmbed()
            .setAuthor("MENÜ")
            .setDescription("İstanbul Translate : Simit")
            .setColor("#00ff08")
            .setImage("http://mmatr.pe.hu/yemekresimleri/gevrek.jpg")

        message.channel.send(menu);

        //kod bitiş
}

module.exports.help = {
    name: "gevrek"
}