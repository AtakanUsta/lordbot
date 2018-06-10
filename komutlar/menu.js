const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

      
        let menu = new Discord.RichEmbed()
            .setAuthor("MENÜ")
            .setDescription("İstediğini Seç ve Ye :D")
            .setColor("#00ff08")
            .addField(".lahmacun", "Mis Gibi Bi Lahmacun Yersin", false)
            .addField(".pide", "Pide Yersin", false)
            .addField(".boyoz", "İzmire Has Olan Boyozu Yersin", false)            
            .addField(".çay", "Mis Gibi Tavşan Kanı bir Çay İçersin", false)
            .addField(".kahve", "Turkiş kafi", false)
            .addField(".tost", "oooh mis Gibi Kaşarlı Tost", false)     
            .addField(".baklava", "Haşurrrt", false)
            .addField(".gevrek", "Gevrek Yersin istersen .çay Yazıp Yanında Bide Çay İçersin", false)
            .addField(".bomba", "İzmire Has Bomba Tatlısını Yersin (bi yesen varya ufff)", false)
            .addField(".çayısmarla", "Herkese Çay Ismarlarsın")

        message.channel.send(menu);
    


        //kod bitiş
}

module.exports.help = {
    name: "menü"
}
