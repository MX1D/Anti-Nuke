module.exports = {
    name: "toggleall",
    name2: "all",
    description: "Toggle all security on/off",

    run (client, message, args) {

        const _ = require("lodash");
        if (message.author.id !== message.guild.ownerID) return message.channel.send("Only server owner!");
        let arr = [];
        const fileWriter = require("../../fileWriter");
        for (const i in client.config[message.channel.guild.id]) {
            if (client.config[message.channel.guild.id][i] === true) {
                arr.push(true);
            }
        }
        if (arr.length > 5) {
            client.config[message.guild.id] = _.mapValues(client.config[message.guild.id], () => false);
            fileWriter.config(client);
            message.channel.send("**Disabled all security!**");
        } else {
            client.config[message.guild.id] = _.mapValues(client.config[message.guild.id], () => true);
            fileWriter.config(client);
            message.channel.send("**Enabled all security!**");
        }
    }
};




