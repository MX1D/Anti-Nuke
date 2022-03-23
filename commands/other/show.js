const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "Show",
  description: "Opens channel for everyone",

  run (client, message, args) {

    const role2 = message.guild.roles.cache.find(
      (role) => role.name === "@everyone"
    );

    if (message.member.hasPermission("MANAGE_CHANNELS")) {
      message.channel.updateOverwrite(role2, {
        VIEW_CHANNEL: true,
      });

      message.channel.send("**Opened chat*");
    } else {
      message.channel.send("**You cannot do this!**");
    }

  }
};