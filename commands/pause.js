const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../config.json");

module.exports = {
  name: "pause",
  description: "Pause a atual música!",
  execute (client, message, args) {
  const { channel } = message.member.voice;
   let embed = new MessageEmbed()
.setColor(COLOR);

    
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
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      embed.setDescription("✅ | Musica pausada!")
      embed.setThumbnail(client.user.displayAvatarURL())
      return message.channel.send(embed)
  }  
  }
}