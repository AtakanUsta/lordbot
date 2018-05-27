const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 
    if(!tomute) return message.reply(":warning: ` Kullanıcıyı Bulamıyorum`");
    if(tomute.hasPermissions("MANAGE_MESSAGES")) return message.reply(":warning: ` Bunu Yapamazsın!`");
    let muterole = message.guild.roles.find(`name`, "susturulmus");

    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: "susturulmus",
                color: "#000000",
                permissions:[
                    SEND_MESSAGES = false,
                    ADD_REACTIONS = false
                ]
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.owerwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }

    //-----

    let mutetime = args[1];
    if(!mutetime) return message.reply(":warning: `Lütfen Susturulacak Zamanı Milisaniye ile Yaz (1saniye = 1000milisaniye)`");

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> Adlı Kişi ${ms(mutetime)} Milisaniye Konuşamayacak`);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> Adlı Kişi Artık Konuşabilir`);


    }, ms(mutetime));




}

module.exports.help = {
    name: "sustur"
}