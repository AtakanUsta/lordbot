const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

        if(!message.member.hasPermissions("ADMINIASTOR")) return message.channel.send(":warning: `Bunu Yapmaya Yetkin Yok!`");
        


        let kanal = message.guild.channels.find('name', `💥bot-komutları`);
        let rol = message.guild.roles.find('name', "o");

        let rol2 = message.guild.roles.find('name', "❌Takipçiler❌");
        let rol3 = message.guild.roles.find('name', "💚Konuşkan Üye💚");
        let rol4 = message.guild.roles.find('name', "🔥LORD - Takipçi🔥");
        let rol5 = message.guild.roles.find('name', "💛ATN - Takipçi💛");
        let rol6 = message.guild.roles.find('name', "🧡Ultra Takipçi🧡");
        let rol7 = message.guild.roles.find('name', "💜Nihai Takipçi💜");
        let rol8 = message.guild.roles.find('name', "💚Aktif Üye💚");

            if(!kanal) return message.channel.send(":warning: `Kanalını Bulamıyorum!`")

            kanal.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
             
            kanal.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
           
            kanal.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
        
            kanal.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
             
            kanal.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
           
            kanal.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
        
            kanal.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })




            kanal.overwritePermissions(rol, {
                SEND_MESSAGES: false
  
            });






            let sohpetiaçembed = new Discord.RichEmbed()
            .setAuthor("Bot-Komut Sohpeti Kapatıldı !", `${message.author.avatarURL}`)
            .setColor("#d10000")
            .setDescription(`${message.author.username} Adlı Yetkili Sohpeti Kapattı!`)
            
            .setFooter("(c) LordBot Mustafa Eren Tarafından Kodlanmıştır")
            .setTimestamp()
            .addBlankField()
            .addField("Sohpet Tekrar Açılanakadar Konuşulamaz!", "Yetkilinin Sohpeti Açması İçin Yazması Gereken : .botkomutaç")
            .addBlankField()

            kanal.send(sohpetiaçembed)

            

            



        //kod bitiş
}

module.exports.help = {
    name: "botkomutkapat"
}