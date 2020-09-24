const { MessageEmbed } = require("discord.js")
const { readdirSync } = require("fs")
const { COLOR } = require("../config.json");
module.exports = {
  name: "help",
  description: "Tenha acesso à todos os comandos e descrição!",
  execute (client, message, args) {
    
    
let embed = new MessageEmbed()
.setAuthor("Sessão de Ajuda!", client.user.displayAvatarURL())
.setThumbnail(client.user.displayAvatarURL())
.setColor(COLOR)
.setDescription(`Estes são os meus comandos! ${client.user.username}`)
let command = readdirSync("./commands")    

let i;
    for(i = 0; i < command.length; i++) {
      console.log(command[i])
      
      const cmd = client.commands.get(command[i].replace(".js", ""))
      embed.addField(`**${cmd.name}**`, cmd.description, true)
      
    }
    
    message.channel.send(embed)
    
    

    
    
    
  }
}