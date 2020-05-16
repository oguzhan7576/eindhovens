const discord = require("discord.js");
const botConfig = require("./botconfig.json");


const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/" , (err, files) => {

if(err) console.log(err); 

var jsFiles = files.filter(f => f.split(".").pop() === "js");

if(jsFiles.length <= 0){
    console.log("Kon geen files vinden probeer het opnieuw bro");
    return; 
}

jsFiles.forEach((f,i) => {

var fileGet = require(`./commands/${f}`);
console.log(`De file ${f} is geladen`);

bot.commands.set(fileGet.help.name, fileGet);


})

});

bot.on("ready", async () => {

console.log(`${bot.user.username} is online!`)

bot.user.setActivity("Eindhoven Roleplay", {type: "STREAMING"});

})

//bericht
bot.on("message", async message => {
    
    if(message.author.bot) return;

if(message.channel.type === "dm") return;

var prefix = botConfig.prefix;

var messageArray = message.content.split(" ");

var command = messageArray[0];

var arguments = messageArray.slice(1);

var commands = bot.commands.get(command.slice(prefix.length));

if(commands) commands.run(bot,message, arguments);



//Bercihtje 


client.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get('673185618930434068');
    if(!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('711361318690488320');

    if(!channel) return;

    channel.send(`Welkom op Eindhoven Roleplay ${member} ⚡`);

})

if(command === `${prefix}ip`){

    return message.channel.send("*IP*: `cfx.re/join/3yb8qr` ");

}


 
});



bot.login(process.env.token);