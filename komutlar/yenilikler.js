const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


        
        let yenilikler = new Discord.RichEmbed()
            .setAuthor("~ Y E N İ L İ K L E R ~")
            .setDescription("Yeniliklere Burdan Bakabilirsin")
            .setColor("#00ff08")
            .addField(" .menü ", `Menüye Bakmanıza Yarar`)
           

        message.channel.send(yenilikler);
    

}

module.exports.help = {
    name: "yenilikler"
}
