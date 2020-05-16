const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    
 //!clear 21

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen rechten doe maar liever niet.");

if (!args[0]) return message.reply("Geen geldige getal.");

if(Number.isInteger(parseInt(args[0]))){

var amount = parseInt(args[0]) + 1;

message.channel.bulkDelete(amount).then(() => { 

    if(args[0] == 0){

        message.channel.send(`Bericht kon niet worden verwijderd`).then(msg => msg.delete(3000));



    } else if (args[0] == 1){

        message.channel.send(`Bericht verwijderd.`).then(msg => msg.delete(3000));
    
    

    }
    

    

    

    
        

        
    message.channel.send(`Bericht verwijderd.`).then(msg => msg.delete(3000));

});

     } else { 
         return message.channel.send("Ongelgide getal.");
        
}




}

module.exports.help = {
    name: "clear"
}