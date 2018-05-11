const botconfig = require("./botconfig.json") ;
const Discord = require("discord.js") ;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {

  console.log(`${bot.user.username} Adli Oyuncu Suan Cevrimici `);
  bot.user.setActivity("Mustafa Eren Kodluyor! - lord!yardım");
});


bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}deneme`){
    return message.channel.send("denemelendiniz :D");
  }



    if(message.content === prefix + "reboot" ) {
        if(message.author.id === '327080554245652481') {
          message.channel.send("Bot Yeniden Başlatılıyor!").then (msg => {
          console.log("Bot Yeniden Başlatılıyor");
          process.exit(0);
        });
        }else {

          message.channel.send("Bu Yetkiye Sahip Değilsin!!");
        }

    }


if (message.content === "sa") {
  message.reply("Aleyküm Selam Hoşgeldin")
}

if (message.content === "Sa") {
  message.reply("Aleyküm Selam Hoşgeldin")
}

if (message.content === "sA") {
  message.reply("Aleyküm Selam Hoşgeldin")
}

if (message.content === "SA") {
  message.reply("Aleyküm Selam Hoşgeldin")
}

if (message.content === "Mustafa Eren Çok Yakışıklı") {
  message.reply("Aynn Moruq")
}

if (message.content === "Selam") {
  message.reply("Sanada Selam Yolcu :D")
}

if (message.content === "selam") {
  message.reply("Sanada Selam Yolcu :D")
}

if(cmd === `${prefix}yardım`) {

  let botembed = new Discord.RichEmbed()
  .setDescription("Komutlar")
  .setColor("#28ff19")
  .addField("Kullanıcı Komutları","Yakında Eklenecek - Beta Aşamasında")
  .addField("Eğlence Komutları","Yakında Eklenecek - Beta Aşamasında")
  .addField("Diğer Komutlar","Yakında Eklenecek - Beta Aşamasında")
  .addField("Yönetici Komutları","Yakında Eklenecek - Beta Aşamasında")
  .addField("Bot Kurucu Komutları","lord!kurucukomut");

  return message.channel.send(botembed);

}


});



bot.login(botconfig.token);
