const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

            //başlangıç
            
            if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
            let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
            if(!wUser) return message.reply(":warning: `Lütfen Uyarmak İstediğin Kullanıcınında İsmini Yaz`");
            if(wUser.hasPermissions("MANAGE_MESSAGES")) return message.reply(":warning: `Bu Kullanıcıyı Uyaramazsın!`");
            let reason = args.join(" ").slice(22);
            if(!reason) return message.reply(":warning: `Lütfen Geçerli Bir Sebep Bir`")


            if(!warns[wUser.id]) warns[wUser.id] = {
                warns: 0
            };

            warns[wUser.id].warns++;

            fs.writeFile("./LordMusoTR/warnings.json", JSON.stringify(warns), (err) => {
                if (err) console.log(err);
            });

            let warnembed = new Discord.RichEmbed()
            .setDescription(`${message.author.username} Adlı Yetkilinin Verdiği Uyarı`)
            .setAuthor("U Y A R I")
            .setColor("#fc6400")
            .addField("Uyarılan", wUser)
            .addField("Uyarıldığı Kanal", message.channel)
            .addField("Aldığı Uyarı Sayısı", warns[wUser.id].warns)
            .addField("Sebep", reason);

            let warnchannel = message.guild.channels.find('name', "lordlog");
            if(!warnchannel) return message.reply(":warning: **`lordlog`**`Adında Bir Kanal Göremiyorum Lütfen Kontrol Et!`");

            warnchannel.send(warnembed);

            if(warns[wUser.id].warns == 1){
                let uyarı1 = message.guild.roles.find("name", "Uyarı 1");
                wUser.addRole(uyarı1).catch(console.error);
                
               
            }
            if(warns[wUser.id].warns == 2){
                let uyarı2 = message.guild.roles.find("name", "Uyarı 2");
                wUser.addRole(uyarı2).catch(console.error);
                
            }

            if(warns[wUser.id].warns == 3){
                let uyarı3 = message.guild.roles.find("name", "Uyarı 3");
                wUser.addRole(uyarı3).catch(console.error);

                message.guild.member(wUser).kick(reason)
                message.channel.send(`<@${wUser.id}> Adlı Kullanıcı 3 Uyarı Aldığı İçin Kicklendi!`)
            }
if(warns[wUser.id].warns == 4){
    message.guild.member(wUser).ban(reason)
    message.channel.send(`<@${wUser.id}> Adlı Kullanıcı 4 Uyarı Aldığı İçin Banlandı!`)
}

            
            

            
            
            
            
            
            
            
            
            //bitiş

}

module.exports.help = {
    name: "uyar"
}
