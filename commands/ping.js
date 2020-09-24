//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Pingando o bot!",
  execute(client, message) {
    message.channel.send("Pong!:ping_pong:");
  }
};
