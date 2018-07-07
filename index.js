const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
const Util = require('discord.js');


const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


    fs.readdir("./komutlar/", (err, files) => {
        if(err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.length <= 0) {
            console.log("Komut Bulamıyorum Lütfen Kontrol Et QNQ");
            return;

        }

        jsfile.forEach((f, i) => {
            let props = require(`./komutlar/${f}`);
            
            console.log(`${f} Yüklendi`);
            bot.commands.set(props.help.name, props);
            
        });
    });




    fs.readdir("./komutlar/sohpetikapat/", (err, files) => {
        if(err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.length <= 0) {
            console.log("Sohpeti Kapatta Komut Bulamıyorum Lütfen Kontrol Et QNQ");
            return;

        }

        jsfile.forEach((f, i) => {
            let props2 = require(`./komutlar/sohpetikapat/${f}`);
            
            console.log(`${f} Yüklendi [sohpetikapat]`);
            bot.commands.set(props2.help.name, props2);
            
        });
    });


   

    fs.readdir("./komutlar/gerisayim/", (err, files) => {
        if(err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.length <= 0) {
            console.log("gerisayimda Komut Bulamıyorum Lütfen Kontrol Et QNQ");
            return;

        }

        jsfile.forEach((f, i) => {
            let props4 = require(`./komutlar/gerisayim/${f}`);
            
            console.log(`${f} Yüklendi [gerisayim]`);
            bot.commands.set(props4.help.name, props4);
            
        });
    });


    function ActivityStreaming() {
        return new Promise(resolve => {
          setTimeout(() => {
            bot.user.setActivity(`Yardım : .yardım`, { type: 'STREAMING',url:'http://twitch.tv/mustafaeren'});
            ActivityServers();
          }, 10000);
        });
    }
    function ActivityServers() {
        return new Promise(resolve => {
          setTimeout(() => {
            bot.user.setActivity(`Mustafa Eren ile`, { type: 'STREAMING',url:'http://twitch.tv/mustafaeren'});
            ActivityStreaming();
          }, 10000);
        });
    }
    
    let istatistikkanali = bot.channels.get('459733762234777601');

    

    function istatistik() {
        return new Promise(resolve => {
          setTimeout(() => {
           
            
            bot.channels.get("459733762234777601").setName(`${bot.guilds.size} Adet Sunucudayım`);

            istatistik2();
          }, 10000);
        });
    }
    
    function istatistik2() {
        return new Promise(resolve => {
          setTimeout(() => {
           
            bot.channels.get("459733762234777601").setName(`${bot.guilds.size} Adet Sunucudayım`);
            istatistik();
          }, 10000);
        });
    }




    bot.on(`ready`,() => {
        bot.user.setUsername('LordBot Beta Test');
        console.log(``);
        console.log(`#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#`);
        console.log(`|                                             |`);
        console.log(`#      LordBot Beta Test Aktifleştirildi!     #`);
        console.log(`|                                             |`);
        console.log(`#           Created by Mustafa Eren           #`);
        console.log(`|                                             |`);
        console.log(`#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#`);
        console.log(` | ${bot.guilds.size} Server |`);
        
        //functions
        ActivityStreaming();
        










    });

    bot.on('message', async message => {
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        let prefix = botconfig.prefix;
        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);




        
        
        
        
        
                if(message.content === 'sa') {
            message.reply("Aleyküm Selam Hoşgeldin :wave:");
        }
                if(message.content === 'SA') {
            message.reply("Aleyküm Selam Hoşgeldin :wave:");
        }
                if(message.content === 'Sa') {
            message.reply("Aleyküm Selam Hoşgeldin :wave:");
        }
                if(message.content === 'sA') {
            message.reply("Aleyküm Selam Hoşgeldin :wave:");
        }
                if(message.content === 'Selam') {
            message.reply("Kod Adlı İnsan Evladı Hoşgeldin :wave:");
        }
                if(message.content === 'selam') {
            message.reply("Kod Adlı İnsan Evladı Hoşgeldin :wave:");
        }
                if(message.content === 'SELAM') {
            message.reply("Kod Adlı İnsan Evladı Hoşgeldin :wave:");
        }
                        if(message.content === 'yapay zeka') {
             message.reply("Senin Gibi Bi İnsan Benim Gibi Zeki Bir Bota Karşı Çıkamaz Yakında Sonunuzu Getircek Olan Bu Robotlarla İyi Eğlenin Çünkü Gün Gelicek Eğlenemiceksiniz :warning:");
        }
                                if(message.content === 'Yapay zeka') {
            message.reply("Senin Gibi Bi İnsan Benim Gibi Zeki Bir Bota Karşı Çıkamaz Yakında Sonunuzu Getircek Olan Bu Robotlarla İyi Eğlenin Çünkü Gün Gelicek Eğlenemiceksiniz :warning:");
        }
                                if(message.content === 'Yapay Zeka') {
            message.reply("Senin Gibi Bi İnsan Benim Gibi Zeki Bir Bota Karşı Çıkamaz Yakında Sonunuzu Getircek Olan Bu Robotlarla İyi Eğlenin Çünkü Gün Gelicek Eğlenemiceksiniz :warning:");
        }
                                if(message.content === 'YAPAY zeka') {
            message.reply("Senin Gibi Bi İnsan Benim Gibi Zeki Bir Bota Karşı Çıkamaz Yakında Sonunuzu Getircek Olan Bu Robotlarla İyi Eğlenin Çünkü Gün Gelicek Eğlenemiceksiniz :warning:");
        }
                                if(message.content === 'YAPAY Zeka') {
            message.reply("Senin Gibi Bi İnsan Benim Gibi Zeki Bir Bota Karşı Çıkamaz Yakında Sonunuzu Getircek Olan Bu Robotlarla İyi Eğlenin Çünkü Gün Gelicek Eğlenemiceksiniz :warning:");
        }
                                if(message.content === 'YAPAY ZEKA') {
            message.reply("Senin Gibi Bi İnsan Benim Gibi Zeki Bir Bota Karşı Çıkamaz Yakında Sonunuzu Getircek Olan Bu Robotlarla İyi Eğlenin Çünkü Gün Gelicek Eğlenemiceksiniz :warning:");
        }
        
        
        




        bot.on("guildMemberAdd", (member) => {
            console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );

          });



        bot.on(`MESSAGE_CREATE`, (message) => {

        
        });

        console.log(`[LordLog] ${message.author.username} | ${message.channel}   :   ${message.content}`)





                //
                //      Yukarıda
                //  Hatalı Kodlama Olabilir 
                //
                //



 


        let commandfile = bot.commands.get(command.slice(prefix.length));
        if(commandfile) commandfile.run(bot,message,args);



        if(!command.startsWith(prefix)) return;

        if(message.content === 'ping') {
            message.reply("ponglandın :D");
        }


    




       
    });

    bot.login(process.env.TOKEN);
