
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

        if(!message.member.hasPermissions("ADMINIASTOR")) return message.channel.send(":warning: `Bunu Yapmaya Yetkin Yok!`");
        

        let sohpet = message.guild.channels.find('name', `💬sohbet`);
        let rol = message.guild.roles.find('name', "o");

        let rol2 = message.guild.roles.find('name', "❌Takipçiler❌");
        let rol3 = message.guild.roles.find('name', "💚Konuşkan Üye💚");
        let rol4 = message.guild.roles.find('name', "🔥LORD - Takipçi🔥");
        let rol5 = message.guild.roles.find('name', "💛ATN - Takipçi💛");
        let rol6 = message.guild.roles.find('name', "🧡Ultra Takipçi🧡");
        let rol7 = message.guild.roles.find('name', "💜Nihai Takipçi💜");
        let rol8 = message.guild.roles.find('name', "💚Aktif Üye💚");

            if(!sohpet) return message.channel.send(":warning: `Kanalını Bulamıyorum!`")

            sohpet.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
             
            sohpet.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
           
            sohpet.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
        
            sohpet.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
             
            sohpet.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
           
            sohpet.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
        
            sohpet.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })




            sohpet.overwritePermissions(rol, {
                SEND_MESSAGES: false
  
            });





            let sohpetiaçembed = new Discord.RichEmbed()
            .setAuthor("Sohpet Açıldı !", `${message.author.avatarURL}`)
            .setDescription(`${message.author.username} Adlı Yetkili Sohpeti Açtı!`)
            .setColor("#0dc900")
            .setFooter("(c) LordBot Mustafa Eren Tarafından Kodlanmıştır")
            .setTimestamp()
            .addBlankField()
            .addField("Artık Konuşabilirsiniz!", "Yetkilinin Sohpeti Tekrar Kapaması İçin Yazması Gereken : .sohpetkapat")
            .addBlankField()

            kanal.send(sohpetiaçembed)

            

            



        //kod bitiş
}

module.exports.help = {
    name: "sohpetiaç"
}