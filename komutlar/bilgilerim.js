const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let kisi = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!kisi) return message.reply(":warning: `Lütfen Bilgilerine Bakmak İstediğin Kullanıcınında İsmini Yaz`");

        let usericon = kisi.user.avatarURL
        let bilgilerimembed = new Discord.RichEmbed()
            .setAuthor(kisi.user.username)
            .setThumbnail(usericon)
            .setDescription("Kullanıcı Bilgileri")
            .setColor("#00ff08")
            .addField("Kullanıcı Adı :", `${kisi.user.username}#${kisi.user.discriminator}`)
            .addField("ID'si :", kisi.id)
            .addField("Hesap Açılma Tarihi :", kisi.user.createdAt)
            .addField("Attığı Son Mesaj :", `${kisi.lastMessage}`);

        message.channel.send(bilgilerimembed);
    

}

module.exports.help = {
    name: "bilgi"
}
