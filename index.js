const discord = require("discord.js");
const BotConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online`);

    bot.user.setActivity("Eindhoven Roleplay", { type: "PLAYING" });

});

bot.on("message", async message => {

    if(message.author.bot) return;
  
   if(message.channel.type === "dm") return; 

   var prefix = BotConfig.prefix;

   var messageArray = message.content.split(" "); 

   var command = messageArray[0];

   var arguments = messageArray.slice(1);

   if(command === `${prefix}ip`){

    return message.channel.send("**IP**:`cfx.re/join/3yb8qr`");

   }

   
   if(command === `${prefix}citybug`){

    return message.channel.send("Probeer deze grafische instellingen: || https://imgur.com/eFKbcKR ||");

   }

  

});

bot.login(process.env.token);