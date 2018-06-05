const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//kod başlangıç






       
        let yardimaembed = new Discord.RichEmbed()
            .setAuthor("~ A D M İ N ~")
            .setColor("#04ff00")
            .addField(".yaz [mesaj]", `Bota Mesaj Yazdırmaya Yarar!`)
            .addField(".temizle [sayı]", `Bota Mesaj Yazdırmaya Yarar!`)
            .addField(".sustur [kullanıcı] [süre (milisaniye biçiminden)]", `Kullanıcıyı Belli Süre Susturmaya Yarar`)
            .addField(".uyar [kullanıcı]", `BETA AŞAMASINDA`)


        message.channel.send(yardimaembed);
    






//kod bitiş

}

module.exports.help = {
    name: "yardım-a"
}
