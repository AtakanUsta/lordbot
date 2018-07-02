module.exports.run = async (bot, message, args) => {



        if(message.author !== ayar.sahip) return message.channel.send(":warning: `Bu Komutu Sadece Mustafa Eren Kullanabilir !`")
        if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
        
        let member = message.mentions.members.first();
        let role = message.guild.roles.find("name", "🍀Atakan usta🍀");


      member.addRole(role).catch(console.error);



}

module.exports.help = {
    name: "rolekle"
}
