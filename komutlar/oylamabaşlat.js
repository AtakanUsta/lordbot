
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

  message.channel.send({embed})
  
  
  let emoji1 = message.guild.emojis.find(`name`, "one");
    let emoji2 = message.guild.emojis.find(`name`, "two");
      let emoji3 = message.guild.emojis.find(`name`, "three");
        let emoji4 = message.guild.emojis.find(`name`, "four");
          let emoji5 = message.guild.emojis.find(`name`, "five");
            let emoji6 = message.guild.emojis.find(`name`, "six");
              let emoji7 = message.guild.emojis.find(`name`, "seven");
                let emoji8 = message.guild.emojis.find(`name`, "eight");
                  let emoji9 = message.guild.emojis.find(`name`, "nine");
  
              message.react(emoji1);
              message.react(emoji2);
              message.react(emoji3);
    message.react(emoji4);
    message.react(emoji5);
    message.react(emoji6);
    message.react(emoji7);
    message.react(emoji8);
    message.react(emoji9);
    message.react("🔟");

  
  
        //kod bitiş 
  }

module.exports.help = {
    name: "oylamabaşlat"
}
