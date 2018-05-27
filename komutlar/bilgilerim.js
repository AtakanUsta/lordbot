const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


        let usericon = message.author.avatarURL
        let bilgilerimembed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setThumbnail(usericon)
            .setDescription("Kullanıcı Bilgileri")
            .setColor("#00ff08")
            .addField("Kullanıcı Adı :", `${message.author.username}#${message.author.discriminator}`)
            .addField("ID'si :", message.author.id)
            .addField("Hesap Açılma Tarihi :", message.author.createdAt);

        message.channel.send(bilgilerimembed);
    

}

module.exports.help = {
    name: "bilgilerim"
}