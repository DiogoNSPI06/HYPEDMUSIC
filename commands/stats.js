const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");



module.exports = {
  name: "stats",
  description: "Consiga informações sobre mim!",
  execute(client, message, args) {
    
    let embed = new MessageEmbed()
    .setColor(COLOR)
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`Status e informações!`, client.user.displayAvatarURL())
    .setDescription(`Meu nome é: **${client.user.username}** e eu Toco musica!`)
    .addField("Sevidores que estou:", client.guilds.cache.size, true)
    .addField("Meu ID", client.user.id, true)
    .addField("Rich presence:", client.user.presence.activities[0].name, true)
    .addField("Uptime:", client.uptime, true)
    .addField("Status:", client.user.presence.status, true)
    .addField("Membros:", client.users.cache.size)
 console.log(client.user.presence)
    message.channel.send(embed)
  }
};
