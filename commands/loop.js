const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");

module.exports = {
  name: "loop",
  description: "Dê um loop na sua playlist",
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
    
    //OOOOF
    serverQueue.loop = !serverQueue.loop
    
    
    embed.setDescription(`Loop está setado para **${serverQueue.loop ? "Enabled" : "Disabled"}**`)
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed)
    
    
    
    
  }
}