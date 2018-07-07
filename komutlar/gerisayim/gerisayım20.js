const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç
        let yazan = message.author.username

        
            message.channel.send(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **20**`)
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **19**`))
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **18**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **17**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **16**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **15**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **14**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **13**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **12**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **11**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **10**`))
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **9**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **8**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **7**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **6**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **5**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **4**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **3**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **2**`))     
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımının Bitmesine = **1**`))      
            .then((message)=>  message.edit(`${yazan} Adlı Kişinin Gerisayımı **BİTTİ!**`)) 

            

              


        //kod bitiş
}

module.exports.help = {
    name: "gerisayım20"
}