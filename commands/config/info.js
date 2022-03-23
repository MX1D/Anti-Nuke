const Discord = require("discord.js");

module.exports = {
    name: "info",
    description: "Lists enabled security",

    async run (client, message, args) {
        let arr = [];
        for (const i in client.config[message.guild.id]) {
            if (client.config[message.guild.id][i] === true) {
                arr.push(":green_circle:");
            } else {
                arr.push(":red_circle:");
            }
        }
        const embed = new Discord.MessageEmbed().setColor(0x36393E).setTitle("Security stats:")
            .setDescription(`
            Ban: ${ arr[0] }
            Kick: ${ arr[1] }
            Role Creation: ${ arr[2] }
            Role Updates: ${ arr[3] }
            Adding bots: ${ arr[4] }
            Anti Raid bots: ${ arr[5] }
            Channel Creation: ${ arr[6] }
            Channel Deletion: ${ arr[7] }
            Webhook Creation: ${ arr[8] }
            Webhook Deletion: ${ arr[9] }
            Role Create: ${ arr[10] }
        `);

        message.channel.send(embed);
    }
};


