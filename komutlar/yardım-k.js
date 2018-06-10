const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//kod başlangıç






       
        let yardımkembed = new Discord.RichEmbed()
            .setAuthor("~ K U L L A N I C I ~")
            .setColor("#00ff08")
            .addField("Bilgilerine Bakmak İçin :", `.bilgilerim`)
            .addField("Bot Kurucunun Bilgilerine Bakmak İçin :", `.botkurucu`)
        .addField(" .menü ", `Menüye Bakmanıza Yarar`)
        .addField("Yeniliklere Bakmak İçin :", `.yenilikler`);
            

        message.channel.send(yardımkembed);
    






//kod bitiş

}

module.exports.help = {
    name: "yardım-k"
}
