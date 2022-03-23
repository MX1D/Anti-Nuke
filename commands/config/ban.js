module.exports = {
    name: "toggleban",
    name2: "ban",
    description: "Toggle ban security",
    run (client, message, args) {
        if (message.author.id !== message.guild.ownerID) return message.channel.send("Only server owner!");
        const fileWriter = require("../../fileWriter");
        selectCategory(this.name2, message);
        function selectCategory (category, message) {
            client.config[message.guild.id][category] = !client.config[message.guild.id][category];
            fileWriter.config(client);
            if (client.config[message.guild.id][category] === true) {
                message.channel.send("**Enabled:white_check_mark:**");
            } else {
                message.channel.send("**Disabled :white_check_mark:**");
            }
        }
    }
}