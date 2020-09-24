const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");
module.exports = {
  name: "drop",
  description: "Adicione um som na playlist!",
  execute(client, message, args) {
    let embed = new MessageEmbed().setColor(COLOR);
    const { channel } = message.member.voice;
    if (!channel) {
      embed.setAuthor("Vc precisa estar em um canal de voz!");
      return message.channe.send(embed);
    }

    const serverQueue = client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("A playlist está vazia");
      return message.channel.send(embed);
    }
    
     if(isNaN(args[0])) {
      embed.setAuthor("Favor Utilizar valores Numéricos")
      return message.channel.send(embed)
    }
   
    if(args[0] > serverQueue.songs.length) {
      embed.setAuthor("Não pude achar este som")
      return message.channel.send(embed)
    }
    
    
    serverQueue.songs.splice(args[0] - 1, 1)
    embed.setDescription("Som adicioando na playlist!")
    embed.setThumbnail(client.user.displayAvatarURL())
    return message.channel.send(embed)
  }
};
