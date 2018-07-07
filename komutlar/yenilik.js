const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

        if(message.author.id !== botconfig.sahip) return message.channel.send(":warning: `Bunu Sadece Mustafa Eren Kullanabilir!`")

            let icon = bot.user.avatarURL

        let yenilikler = new Discord.RichEmbed()
        .setAuthor("Yenilikler" ,icon)
        .setDescription("Yenilikere Burdan Gözatabilirsin")
        .setColor("#06c100")
        .setFooter("LordBot Mustafa Eren Tarafından Geliştirlmektedir")
        .setTimestamp()
        .addBlankField()
        .addField("8 Temmuz Güncellemesi", `\n**Yenilikler** \n**1-**Yardım Bölümü Geliştirildi\n**2-**Şikayet Komutu Eklendi\n**3-**Uyar ve Uyarılar Komutları Eklendi\n**4-**Geri Sayım Komutu Eklendi\n**5-**Menü Komutları Gereksiz Oldukları İçin Kaldırıldı\n**6-**LordBot Destek Sunucusu Açıldı **https://discord.gg/eaPEC8f**`)
        .addBlankField()


    message.channel.send(yenilikler)


        //kod bitiş
}

module.exports.help = {
    name: "yenilik"
}