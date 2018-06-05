const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


        
        let yenilikler = new Discord.RichEmbed()
            .setAuthor("~ Y E N İ L İ K L E R ~")
            .setDescription("Yeniliklere Burdan Bakabilirsin")
            .setColor("#00ff08")
            .addField("Admin Komutlarındaki Yenilik", `1 - .temizle [sayı] | Chati Temizlemenize Yarar`, "inline=true")
            .addField(" ", `2 - .yaz [mesaj] | Bota Birşeyler Yazdırmaya Yarar`, "inline=true")
           

        message.channel.send(yenilikler);
    

}

module.exports.help = {
    name: "yenilikler"
}
