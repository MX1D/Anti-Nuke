const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "server",
    description: "Shows server info",

    run (client, message, args) {
        const online = client.guilds.cache.get(message.guild.id).members.cache
            .filter(m => m.presence.status === 'online').size;
        const textc = message.guild.channels.cache.filter(m => m.type === "text").size;
        const voicec = message.guild.channels.cache.filter(m => m.type === "voice").size;
        const category = message.guild.channels.cache.filter(m => m.type === "category").size;
        const embed = new MessageEmbed().setAuthor(message.guild.name, message.guild.iconURL())
            .addFields(
                { name: "🆔 Server ID", value: message.guild.id, inline: true },
                { name: "📆 Created On", value: `**<t:${ Math.round(message.guild.createdAt.getTime() / 1000) }:R>**`, inline: true },
                { name: "👑 Owned by", value: `<@${ message.guild.ownerID }>`, inline: true },
                { name: `👥 Members (${ message.guild.memberCount })`, value: `**${ online }** Online`, inline: true },
                { name: `💬 Channels (${ message.guild.channels.cache.size - category })`, value: `**${ textc }** Text | **${ voicec }** Voice`, inline: true },
                { name: `🌍 Others`, value: `**Verifcation Level:** ${ message.guild.mfaLevel }`, inline: true },
                { name: `🔐 Roles (${ message.guild.roles.cache.size })`, value: `There are ${ message.guild.roles.cache.size } roles in the server`, inline: true }
            );
        message.channel.send(embed);
    }
};