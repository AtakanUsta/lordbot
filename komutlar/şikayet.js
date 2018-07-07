const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if(!User) return message.reply(":warning: `Lütfen Şikayet İstediğin Kullanıcınında İsmini Yaz`");
        if(User.hasPermissions("ADMINISTRATOR")) return message.reply(":warning: `Bu Kullanıcıyı Şikayet Edemezsin!`");
        let sebep = args.join(" ").slice(22);
        if(!sebep) return message.reply(":warning: `Lütfen Geçerli Bir Sebep Bir`")

        let kanal = message.guild.channels.find('name', "lordşikayet");
        if(!kanal) return message.reply(":warning: **`lordşikayet`**`Adında Bir Kanal Göremiyorum Lütfen Kontrol Et!`");


                let icon = message.author.avatarURL

        let embed = new Discord.RichEmbed()
        .setAuthor("Şikayet Sistemi", icon)
        .setDescription(`${message.author.username} Adlı Kullanıcının Şikayeti`)
        .setColor("#ffa100")
        .setFooter("LordBot Şikayet Sistemi")
        .setTimestamp()
        .addBlankField()
        .addField("Şikayet Edilen Kişi", `${User}`)
        .addField("Şikayet Eden Kişi", `${message.author.username}`)
        .addBlankField()
        .addField("Şikayet Sebebi", `${sebep}`)
        

                message.channel.send(embed)
                kanal.send(embed)


        //kod bitiş
}

module.exports.help = {
    name: "şikayet"
}