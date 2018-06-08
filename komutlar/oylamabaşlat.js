
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

  .addField(":two: : 2 Puan.", ":three: : 3 Puan.")

  .addField(":four: : 4 Puan.", ":five: : 5 Puan.")

  .addField(":six: : 6 Puan.", ":seven: : 7 Puan.")

  .addField(":eight: : 8 Puan.", ":nine: : 9 Puan.")

  .addField(":keycap_ten: : 10 Puan.", "Oylamaya Tepki Vererek Katıabilirsin.");

  message.channel.send({embed});
  then(function (message) {
              message.react("1️⃣")
              message.react("2️⃣")
              message.react("3️⃣")
    message.react("4️⃣")
    message.react("5️⃣")
    message.react("6️⃣")
    message.react("7️⃣")
    message.react("8️⃣")
    message.react("9️⃣")
    message.react("🔟")
              message.pin()
              message.delete()
            }).catch(function() {
              //Something
             });
  
  
        //kod bitiş 
  }

module.exports.help = {
    name: "oylamabaşlat"
}
