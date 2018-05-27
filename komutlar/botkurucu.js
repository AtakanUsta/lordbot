const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {




        let kurucuembed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Bot Kurucu Bilgileri")
            .setColor("#00ff08")
            .addField("Kullanıcı Adı :", "Mustafa Eren 穆斯塔法#1885")
            .addField("ID'si :", "327080554245652481")
            .addField("Botu Oluşturduğu Tarih", bot.user.createdAt);

        message.channel.send(kurucuembed);
    
    

}

module.exports.help = {
    name: "botkurucu"
}