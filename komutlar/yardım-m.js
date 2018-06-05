const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//kod başlangıç






       
        let yardimmembed = new Discord.RichEmbed()
            .setAuthor("~ M Ü Z İ K ~")
            .setColor("#ff0000")
            .addField("Müzik Komutları Deaktif", `Müzik Komutları Yakında Açılacak!`);


        message.channel.send(yardimmembed);
    






//kod bitiş

}

module.exports.help = {
    name: "yardım-m"
}
