const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



//baslangic








        
        
                                
                            let kufuroylama = new Discord.RichEmbed()
                            .setAuthor("Mustafa'nın Mükemmel Oylamaları")
                            .setDescription("Oylamaya Katılın!")
                            .setcolor("#42f44b")
                            .setField("Serverdaki Küfür Yasağı Kaldırılsınmı?", "Evet : :thumbsup:")
                            .setField(" ", "Hayır : :thumbsdown:")
                            .setFooter("Not Hala Bazı Küfürler Yasak Olacak");
                        
                                    if(message.author === "327080554245652481") {
                                        message.channel.send(kufuroylama);
                                    
                                        
                                    
                                }





//bitiş
}

module.exports.help = {
    name: "botkurucu"
}
