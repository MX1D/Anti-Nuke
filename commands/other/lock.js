module.exports = {
  name: "lock",
  description: "Lockdown a channel",

  run (client, message, args) {

    const role2 = message.guild.roles.cache.find(
      (role) => role.name === "@everyone"
    );

    if (message.member.hasPermission("MANAGE_CHANNELS")) {
      message.channel.updateOverwrite(role2, {
        SEND_MESSAGES: false,
      });

      message.channel.send("**Channel locked!**");
    } else {
      message.channel.send("**You cannot do this!**");
    }

  }
}