const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


    fs.readdir("./komutlar/", (err, files) => {
        if(err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.length <= 0) {
            console.log("Komut Bulamıyorum Lütfen Kontrol Et");
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
        bot.user.setActivity("Mustafa Eren Tarafından Kodlanıyor"),
        bot.user.setActivity("Bot Beta Aşamasındadır!");
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
        
        
        
        

 

//Serverdaki Küfür Yasağı **KISITLI** Şekildede Olsa Kaldırılsınmı ? 





        let commandfile = bot.commands.get(command.slice(prefix.length));
        if(commandfile) commandfile.run(bot,message,args);



        if(!command.startsWith(prefix)) return;

        if(message.content === 'ping') {
            message.reply("ponglandın :D");
        }













    });





    bot.login(botconfig.token);
