
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

                        //kod başlangıç


const embed = new Discord.RichEmbed()
  .setAuthor("Oylama", message.author.avatarURL)
  .setColor(0x00AE86)
  .setDescription(`${message.author.username} Adlı Kişinin Başlattığı Oylama`)
  .setFooter("(c) LordBot Mustafa Eren Tarafından Oluşturulmuştur |", "")

  .setTimestamp()

  .addField("Tepkilerin Anlamları", ":one: : 1 Puan")
.addBlankField(true)
  .addField(":two: : 2 Puan.", ":three: : 3 Puan.", true)
 .addBlankField(true)
  .addField(":four: : 4 Puan.", ":five: : 5 Puan.", true)
.addBlankField(true)
  .addField(":six: : 6 Puan.", ":seven: : 7 Puan.", true)
.addBlankField(true)
  .addField(":eight: : 8 Puan.", ":nine: : 9 Puan.", true)
.addBlankField(true)
  .addField(":keycap_ten: : 10 Puan.", "Oylamaya Tepki Vererek Katıabilirsin.", true);

  message.channel.send({embed});
  
  
        //kod bitiş 
  }

module.exports.help = {
    name: "oylamabaşlat"
}
