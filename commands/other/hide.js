module.exports = {
  name: "hide",
  description: "Hide chat for everyone that doesn't have permissions",

  run (client, message, args) {

    const role2 = message.guild.roles.cache.find(
      (role) => role.name === "@everyone"
    );

    if (message.member.hasPermission("MANAGE_CHANNELS")) {
      message.channel.updateOverwrite(role2, {
        VIEW_CHANNEL: false,
      });

      message.channel.send("**Channel hidden**");
    } else {
      message.channel.send("**You cannot do this!**");
    }

  }
}