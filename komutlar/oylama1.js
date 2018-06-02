const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



//baslangic






let oylamaembed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Adlı Yetkilinin Başlattığı [Küfür Kaldırılsınmı] Oylaması")
            .setColor("#00ff08")
            .addField("Sizce Sunucudan Küfür Kaldırılsınmı?", "Evet = :thumbsup")
            .addField("ID'si :", "Hayır = :thumbsdown:");
            

        message.channel.send(oylamaembed);
        
        

        
        
                               





//bitiş
}

module.exports.help = {
    name: "oylama1"
}
