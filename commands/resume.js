const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../config.json");


module.exports = {
  name: "resume", 
  description: "Pause o Audio atual!",
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
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()
  embed.setAuthor("✅ | Audio pausado!")
   embed.setThumbnail(client.user.displayAvatarURL())
  return message.channel.send(embed)
 }
    embed.setDescription("Não há nada que eu possa pausar!")
    message.channel.send(embed)
    
  }
}