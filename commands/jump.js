const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");

module.exports = {
  name: "jump",
  description: "Pule para alguma Música que goste!",
  execute (client, message, args) {
    
     let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Vc precisa estar em um canal de voz!")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Não há nada tocando!")
      return message.channel.send(embed);
    }
     if(!args[0]) {
      embed.setAuthor(`Favor digite o Número da Música!`)
      return message.channel.send(embed)
    }
    
      if(isNaN(args[0])) {
      embed.setAuthor("Apenas valores Numéricos!")
      return message.channel.send(embed)
    }
    
  if(serverQueue.songs.length < args[0]) {
    embed.setAuthor("Não pude achar este som na playlist!")
    return message.channel.send(embed)  
                                         }
    serverQueue.songs.splice(0, Math.floor(args[0] - 1))
    serverQueue.connection.dispatcher.end()
    
    embed.setDescription(`Pulado para - ${args[0]}`)
    message.channel.send(embed)
    
  }
}