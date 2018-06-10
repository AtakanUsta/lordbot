const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç


        let menu = new Discord.RichEmbed()
            .setAuthor("MENÜ")
            .setDescription("Mis Gibi bi Pide Gömdün")
            .setColor("#00ff08")
            .setImage("http://mmatr.pe.hu/yemekresimleri/pide.jpg")

        message.channel.send(menu);


        //kod bitiş
}

module.exports.help = {
    name: "pide"
}