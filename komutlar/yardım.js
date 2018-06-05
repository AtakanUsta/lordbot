const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//kod başlangıç






       
        let bilgilerimembed = new Discord.RichEmbed()
            .setAuthor("~ Y A R D I M ~")
            .setColor("#00ff08")
            .addField("Kullanıcı Komutlarına Bakmak İçin :", `.yardım-k`)
            .addField("Müzik Komutlarına Bakmak İçin :", `.yardım-m`)
            .addField("Admin Komutlarına Bakmak İçin :", `.yardım-a`);

        message.channel.send(bilgilerimembed);
    






//kod bitiş

}

module.exports.help = {
    name: "yardım"
}
