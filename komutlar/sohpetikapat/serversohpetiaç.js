const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

        if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send(":warning: `Bunu Yapmaya Yetkin Yok!`");
        


        let kanal = message.guild.channels.find('name', `💬sohbet`);
        let kanal2 = message.guild.channels.find('name', `📷foto-video`);
        let kanal3 = message.guild.channels.find('name', `💥bot-komutları`);
        let kanal4 = message.guild.channels.find('name', `📢anket`);
        let kanal5 = message.guild.channels.find('name', `x_o_x-odası`);
        let kanal6 = message.guild.channels.find('name', `boksmakinesi`);
        let kanal7 = message.guild.channels.find('name', `1v1-odası`);
        let kanal8 = message.guild.channels.find('name', `slot_makinesi`);
        let kanal9 = message.guild.channels.find('name', `hikaye_oluşturma`);
        let kanal10 = message.guild.channels.find('name', `şarkılardan_sözler`);

        

        let rol2 = message.guild.roles.find('name', "❌Takipçiler❌");
        let rol3 = message.guild.roles.find('name', "💚Konuşkan Üye💚");
        let rol4 = message.guild.roles.find('name', "🔥LORD - Takipçi🔥");
        let rol5 = message.guild.roles.find('name', "💛ATN - Takipçi💛");
        let rol6 = message.guild.roles.find('name', "🧡Ultra Takipçi🧡");
        let rol7 = message.guild.roles.find('name', "💜Nihai Takipçi💜");
        let rol8 = message.guild.roles.find('name', "💚Aktif Üye💚"); 
        let rol9 = message.guild.roles.find('name', "Ultra destekçi");
        let rol10 = message.guild.roles.find('name', "Destekçi");

            

            kanal.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal10.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
             
            kanal.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal10.overwritePermissions(rol3, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
        kanal10.overwritePermissions(rol4, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
             kanal10.overwritePermissions(rol5, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
kanal10.overwritePermissions(rol6, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal10.overwritePermissions(rol7, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal2.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal3.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal4.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal5.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal6.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal7.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal8.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal9.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
kanal10.overwritePermissions(rol8, {'SEND_MESSAGES': true,})


            kanal.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal10.overwritePermissions(rol9, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
kanal10.overwritePermissions(rol10, {'SEND_MESSAGES': true,})






            let sohpetiaçembed = new Discord.RichEmbed()
            .setAuthor("Tüm Server Sohpeti Açıldı !", `${message.author.avatarURL}`)
            .setDescription(`${message.author.username} Adlı Yetkili Server Sohpetini Açtı!`)
            .setColor("#0dc900")
            .setFooter("(c) LordBot Mustafa Eren Tarafından Kodlanmıştır")
            .setTimestamp()
            .addBlankField()
            .addField("Artık Konuşabilirsiniz!", "Yetkilinin Sohpeti Tekrar Kapatması İçin Yazması Gereken : .serversohpetikapat")
            .addBlankField()

            kanal.send(sohpetiaçembed).then(msg => msg.delete(25000));
            kanal2.send(sohpetiaçembed).then(msg => msg.delete(25000));
            kanal3.send(sohpetiaçembed).then(msg => msg.delete(25000));
            kanal4.send(sohpetiaçembed).then(msg => msg.delete(25000));
            kanal5.send(sohpetiaçembed).then(msg => msg.delete(25000));
            kanal6.send(sohpetiaçembed).then(msg => msg.delete(25000));
            kanal7.send(sohpetiaçembed).then(msg => msg.delete(25000));
            kanal8.send(sohpetiaçembed).then(msg => msg.delete(25000));
            kanal9.send(sohpetiaçembed).then(msg => msg.delete(25000));
            kanal10.send(sohpetiaçembed).then(msg => msg.delete(25000));
            

            

            



        //kod bitiş
}

module.exports.help = {
    name: "serversohpetiaç"
}
