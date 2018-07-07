const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

            //başlangıç
            
            if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
            let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
            if(!wUser) return message.reply(":warning: `Lütfen Uyarmak İstediğin Kullanıcınında İsmini Yaz`");
            if(wUser.hasPermissions("MANAGE_MESSAGES")) return message.reply(":warning: `Bu Kullanıcıyı Uyaramazsın!`");
            let reason = args.join(" ").slice(22);
            if(!reason) return message.reply(":warning: `Lütfen Geçerli Bir Sebep Bir`")




            let uyarı1 = message.guild.roles.find("name", "Uyarı 1");
            let uyarı2 = message.guild.roles.find("name", "Uyarı 2");
            let uyarı3 = message.guild.roles.find("name", "Uyarı 3");


            
                //uyarı 1
            let uyarıembed1 = new Discord.RichEmbed()
            .setDescription(`${message.author.username} Adlı Yetkilinin Verdiği Uyarı`)
            .setAuthor("U Y A R I")
            .setColor("#fc6400")
            .addField("Uyarılan", wUser)
            .addField("Uyarıldığı Kanal", message.channel)
            .addField("Aldığı Uyarı Sayısı", "1")
            .addField("Sebep", reason);

                //uyarı 2
            let uyarıembed2 = new Discord.RichEmbed()
            .setDescription(`${message.author.username} Adlı Yetkilinin Verdiği Uyarı`)
            .setAuthor("U Y A R I")
            .setColor("#fc6400")
            .addField("Uyarılan", wUser)
            .addField("Uyarıldığı Kanal", message.channel)
            .addField("Aldığı Uyarı Sayısı", "2")
            .addField("Sebep", reason);

                //uyarı 3
            let uyarıembed3 = new Discord.RichEmbed()
            .setDescription(`${message.author.username} Adlı Yetkilinin Verdiği Uyarı`)
            .setAuthor("U Y A R I")
            .setColor("#fc6400")
            .addField("Uyarılan", wUser)
            .addField("Uyarıldığı Kanal", message.channel)
            .addField("Aldığı Uyarı Sayısı", "3")
            .addField("Sebep", reason);

            let warnchannel = message.guild.channels.find('name', "lordlog");
            if(!warnchannel) return message.reply(":warning: **`lordlog`**`Adında Bir Kanal Göremiyorum Lütfen Kontrol Et!`");






         

  //3.uyarı
  if(wUser.roles.has(uyarı3)) {
    //sunucudan Atılır

}

                        
                        if(wUser.roles.has(uyarı2)) {
                            wUser.addRole(`uyarı1`).catch(console.error);
                            warnchannel.send(uyarıembed3);
                message.channel.send(uyarıembed3);
                wUser.kick()
                            //sunucudan atılır
                        } 

  
            
            
                            if(wUser.roles.has(uyarı1)) {
                                wUser.addRole(455137609123889162).catch(console.error);
                                warnchannel.send(uyarıembed2);
                            message.channel.send(uyarıembed2);
            
                            } 


                            if(!wUser.roles.has(uyarı1)) {
                                wUser.addRole(455137607446167553).catch(console.error);
                                warnchannel.send(uyarıembed1);
                                message.channel.send(uyarıembed1);
                
                            } 


                              
                        
                    

           



                
               
 
            
            
            
            
            
            
            //bitiş

}

module.exports.help = {
    name: "uyar"
}
