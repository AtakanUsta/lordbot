const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");


module.exports.run = async (bot, message, args) => {

        //kod başlangıç

        
        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if(!wUser) return message.reply(":warning: `Kimin Uyarılarına Bakmak İstediğinide Gir`")
        


        let uyarı1 = message.guild.roles.find("name", "Uyarı 1");
        let uyarı2 = message.guild.roles.find("name", "Uyarı 2");
        let uyarı3 = message.guild.roles.find("name", "Uyarı 3");

                let uyarıicon = message.author.avatarURL

            let uyarıembed1 = new Discord.RichEmbed()
            .setAuthor(`Uyarı Sistemi`, uyarıicon)
            .setDescription(`${wUser} Adlı Kullanıcının Uyarı Sayısı`)
            .setColor("#00ff0c")
            .setFooter("LordBot Uyarı Sistemi")
            .setTimestamp()
            .addBlankField()
            .addField(`${wUser.user.username} Adlı Kişinin Uyarı Sayısı = 1`, "1 Uyarı Çok Sıkıntı Değil xd", true)
            .addBlankField()

            let uyarıembed2 = new Discord.RichEmbed()
            .setAuthor(`Uyarı Sistemi`, uyarıicon)
            .setDescription(`${wUser} Adlı Kullanıcının Uyarı Sayısı`)
            .setColor("#ffff00")
            .setFooter("LordBot Uyarı Sistemi")
            .setTimestamp()
            .addBlankField()
            .addField(`${wUser.user.username} Adlı Kişinin Uyarı Sayısı = 2`, "1 Uyarı Daha Alırsan Atılırsın Dikkatli Ol!", true)
            .addBlankField()

            let uyarıembed3 = new Discord.RichEmbed()
            .setAuthor(`Uyarı Sistemi`, uyarıicon)
            .setDescription(`${wUser} Adlı Kullanıcının Uyarı Sayısı`)
            .setColor("#ff0000")
            .setFooter("LordBot Uyarı Sistemi")
            .setTimestamp()
            .addBlankField()
            .addField(`${wUser.user.username} Adlı Kişinin Uyarı Sayısı = 3`, "Kicklenicen.", true)
            .addBlankField()

            let uyarıembed0 = new Discord.RichEmbed()
            .setAuthor(`Uyarı Sistemi`, uyarıicon)
            .setDescription(`${wUser} Adlı Kullanıcının Uyarı Sayısı`)
            .setColor("#ffffff")
            .setFooter("LordBot Uyarı Sistemi")
            .setTimestamp()
            .addBlankField()
            .addField(`${wUser.user.username} Adlı Kişinin Hiç Uyarısı Yok`, "Helal knk Hiç Uyarın Yok :D", true)
            .addBlankField()





        if(wUser.roles.has(uyarı3.id)) {

                
                message.channel.send(uyarıembed3)
        } else {

        if(wUser.roles.has(uyarı2.id)) {
            
            message.channel.send(uyarıembed2)

        } else {

            if(wUser.roles.has(uyarı1.id)) {
                
                message.channel.send(uyarıembed1)

            } else {


            if(!wUser.roles.has(uyarı1.id)) {
                
                message.channel.send(uyarıembed0)

            } }}}



        //kod bitiş
}

module.exports.help = {
    name: "uyarılar"
}