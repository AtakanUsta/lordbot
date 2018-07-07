const Discord = require("discord.js");
const botconfig = require("../prefix.json")

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

            let embed = new Discord.RichEmbed()
            .setAuthor("GeriSayım Komutları")
            .setDescription("Geri Sayım Komutlarına Burdan Bakabilirsin")
            .setColor("#0099ff" || "#1900ff" || "#00ffbf" || "#d000ff" || "#ff0098")
            .addBlankField()
            .addField("Geri Sayım Komutları", `10 Saniye Geri Sayım : ${botconfig.prefix}gerisayım10 \n20 Saniye Geri Sayım : ${botconfig.prefix}gerisayım20 \n30 Saniye Geri Sayım : ${botconfig.prefix}gerisayım30 \n\n1 Dakika Geri Sayım : ${botconfig.prefix}gerisayım60 \n2 Dakika Geri Sayım : ${botconfig.prefix}gerisayım2dk \n`)
            
            message.channel.send(embed)
              


        //kod bitiş
}

module.exports.help = {
    name: "gerisayım"
}