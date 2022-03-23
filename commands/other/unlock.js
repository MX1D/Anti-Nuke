const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "unlock",
  description: "Open a locked channel",

  run (client, message, args) {

    const role2 = message.guild.roles.cache.find(
      (role) => role.name === "@everyone"
    );

    if (message.member.hasPermission("MANAGE_CHANNELS")) {
      message.channel.updateOverwrite(role2, {
        SEND_MESSAGES: true,
      });

      message.channel.send("**Channel unlocked**");
    } else {
      message.channel.send("**You cannot do this!**");
    }

  }
};