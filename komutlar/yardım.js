const Discord = require("discord.js");
const prefix = require("./ayar.json");
 let prefix = ayar.prefix;

module.exports.run = async (bot, message, args) => {

//kod başlangıç






       
        let yardimembed = new Discord.RichEmbed()
            .setAuthor("~ Y A R D I M ~")
            .setColor("#00ff08")
            .addField("Kullanıcı Komutlarına Bakmak İçin :", `.yardım-k`)
            .addField("Müzik Komutlarına Bakmak İçin :", `.yardım-m`)
            .addField("Admin Komutlarına Bakmak İçin :", `.yardım-a`);

        message.channel.send(yardimembed);
    






//kod bitiş

}

module.exports.help = {
    name: "yardım"
}
