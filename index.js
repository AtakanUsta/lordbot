const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
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




 


    bot.on(`ready`,() => {
        console.log(`${bot.user.username} Çevrimiçi Oldu!`);
        bot.user.setActivity("Komutları Öğrenmek İçin : .yardım");

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
        
        
        
        
                                //public botta kalkacak!
        
                                        if(message.content === 'mvo!profil') {
            message.reply("mvo!profil Bu Sunucuda Bir İşe Yaramaz Level Rolleri !rank Komutundaki Seviyenize Bağlıdır ");
        }
                                                if(message.content === 'MVO!profil') {
            message.reply("mvo!profil Bu Sunucuda Bir İşe Yaramaz Level Rolleri !rank Komutundaki Seviyenize Bağlıdır ");
        }
        
        
        

 

//Serverdaki Küfür Yasağı **KISITLI** Şekildede Olsa Kaldırılsınmı ? 





        let commandfile = bot.commands.get(command.slice(prefix.length));
        if(commandfile) commandfile.run(bot,message,args);



        if(!command.startsWith(prefix)) return;

        if(message.content === 'ping') {
            message.reply("ponglandın :D");
        }













    });





    bot.login(botconfig.token);
