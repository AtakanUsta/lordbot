const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {

//kod başlangıç



            let icon = message.author.avatarURL


       
        let yardimembed = new Discord.RichEmbed()
            .setAuthor("LordBot Komutları", icon)
            .setFooter("LordBot Yardım Sistemi", icon)
            .setTimestamp()
            .setColor("#00ff08")
            .addField("Admin Komutları", `✅ **${botconfig.prefix}yaz [mesaj]** | Bota Mesaj Yazdırmayı Sağlar \n\n✅ **${botconfig.prefix}temizle [miktar]** | Seçtiğiniz Miktarda Mesajı Silmeye Yarar\n\n✅ **${botconfig.prefix}sustur @[kullanıcı] [milisaniye]** | Kişiyi Belli Milisaniye Susturur \n               **NOT : 1 Saniye = 1000milisaniye**\n\n✅ **${botconfig.prefix}uyar @[kullanıcı] [sebep]** | Kullanıcıları Uyarmayı Sağlar (3 Uyarıda Kick)`)
            .addBlankField()
            .addField("Kullanıcı Komutları", `✅ **${botconfig.prefix}bilgi @[kullanıcı]** | Kullanıcınin Bilgilerine Bakarsınız \n\n✅ **${botconfig.prefix}botkurucu** | LordBotun Kimin Tarafından Yapıldığına Bakarsınız \n\n✅ **${botconfig.prefix}uyarılar @[kullanıcı]** | Kullanıcının Kaç Uyarısı Olduğuna Bakarsınız \n\n✅ **${botconfig.prefix}gerisayım** | Bir Gerisayım Başlatırsınız`)
            .addBlankField()
            .addField("Destek Sunucumuza Gelmek Link'e Tıklayın", "**https://discord.gg/eaPEC8f**")
            .addBlankField()
            

        message.channel.send(yardimembed);
    






//kod bitiş

}

module.exports.help = {
    name: "yardım"
}
