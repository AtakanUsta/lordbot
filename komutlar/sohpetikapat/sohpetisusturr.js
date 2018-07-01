const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

        let embed = new Discord.RichEmbed()
        .setAuthor("Sohpeti Kapatma Komutları")
        .setColor("#dce000")
        .setThumbnail(`${bot.user.avatarURL}`)
        .setFooter("(c) LordBot Mustafa Eren Tarafından Yapılmıştır!")
        .setTimestamp()
        .addField("Sohpeti Sustur [✅]", ".sohpetikapat")
        .addField("Bot-Komut Sustur [✅]", ".botkomutkapat")
        .addField("Foto-Video Sustur [✅]", ".fotovideokapat")
        .addBlankField(true)
        .addField("Tüm Odaları Sustur [✅]", ".serversohpetikapat");

        message.channel.send(embed)





        //kod bitiş
}

module.exports.help = {
    name: "sohpetisustur"
}