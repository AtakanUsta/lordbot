const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç


        let öneri = args.join(" ").slice(22);
        if(!öneri) return message.reply(":warning: `Lütfen Önerini Yazarak Komutu Kullan`")

        let kanal = message.guild.channels.get("465219721784983603");


                let icon = message.author.avatarURL

        let embed = new Discord.RichEmbed()
        .setAuthor("Öneri Sistemi", icon)
        .setDescription(`${message.author.username} Adlı Kullanıcının Önerisi`)
        .setColor("#ffa100")
        .setFooter("LordBot Öneri Sistemi")
        .setTimestamp()
        .addBlankField()
        .addField("Öneride Bulunan Kişi", `${message.author.username}`)
        .addBlankField()
        .addField("Önerisi", `${öneri}`)
        .addBlankField()
        .addField("Önerim Nerde Gözüküyor?", `Önerin **https://discord.gg/eaPEC8f** Bu Serverda Öneriler Kanalında Gözükür`)
        .addBlankField()
        

                message.channel.send(embed)
                kanal.send(embed)


        //kod bitiş
}

module.exports.help = {
    name: "öner"
}
