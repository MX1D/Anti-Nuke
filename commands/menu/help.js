const Discord = require('discord.js');
const { prefix, author } = require('../settings.json');
const { red } = require('chalk');
const disbut = require("discord-buttons");

module.exports = {
    name: "help",
    description: "help command",

    async run (client, message, args) {


        const blacklistButton = new disbut.MessageButton().setStyle("green").setLabel("Blacklist").setID("blacklist").setEmoji("⚫");
        const whitelistButton = new disbut.MessageButton().setStyle("green").setLabel("Whitelist").setID("whitelist").setEmoji("⚪");
        const trustButton = new disbut.MessageButton().setStyle("green").setLabel("Trust").setID("trust").setEmoji("🧑‍🤝‍🧑");
        const configButton = new disbut.MessageButton().setStyle("green").setLabel("Config").setID("config").setEmoji("⚙️");
        const moreButton = new disbut.MessageButton().setStyle("gray").setLabel("More").setID("more").setEmoji("▶️");

        let buttons1 = [blacklistButton, whitelistButton, trustButton, configButton, moreButton];

        // let blacklist = []
        // let whitelist = []
        // let trust = []
        // let config = []
        // let setup = []
        // let other = []
        // let commands = client.commands.array()
        // commands.forEach(cmd => {
        //     if(typeof cmd === "object"){
        //         if(cmd.name !== undefined){
        //             if(cmd.name !== "help"){

        //                 if(cmd.name.includes("black") || cmd.name.includes("bl") || cmd.name.includes("uball")){
        //                     blacklist.push({name: cmd.name, description: cmd.description})
        //                 } else

        //                 if(cmd.name.includes("white") || cmd.name.includes("wl") || cmd.name.includes("uwall")){
        //                     whitelist.push({name: cmd.name, description: cmd.description})
        //                 } else

        //                 if(cmd.name.includes("toggle")){
        //                     config.push({name: cmd.name, description: cmd.description})
        //                 } else

        //                 if(cmd.name.includes("trust")){
        //                     trust.push({name: cmd.name, description: cmd.description})
        //                 } else

        //                 if(cmd.name.includes("set")){
        //                     setup.push({name: cmd.name, description: cmd.description})
        //                 } else

        //                 {
        //                     other.push({name: cmd.name, description: cmd.description})
        //                 }
        //             }
        //         }
        //     }
        // });
        // if(!args[0]){
        const help = new Discord.MessageEmbed().setTitle("Help Menu").setThumbnail(`${ client.user.avatarURL({ dynamic: true }) }`)
            .setFooter(`© ${ client.user.username } | Prefix: ${ prefix } | By: ${ author }`)
            .setColor(0x36393E)
            .setTimestamp(Date.now())
            .setDescription(`Please choose help list you need
                      
**Make sure bot's role is on top**
`)
            .setImage("https://cdn.discordapp.com/attachments/845386891993677837/947872027673518080/banner.png");

        message.channel.send(help, { buttons: buttons1 }).catch((err) => {
            console.error(red(`[COMMAND FAILED] : [GUILD] ${ message.guild.name } | [CHANNEL] ${ message.channel.name } | [REASON] MISSING PERMISSIONS | ${ err }`));
        });
        return;
        // }

        // function sendEmbed(arr, message){
        //     arr.forEach(element => {
        //         embed.addField(element.name, element.description)
        //     });
        //     message.channel.send(embed, {buttons: buttons}).catch((err) => {
        //         console.error(red(`[COMMAND FAILED] : [GUILD] ${message.guild.name} | [CHANNEL] ${message.channel.name} | [REASON] MISSING PERMISSIONS | ${err}`));
        //     });
        // }

        // if(args[0].toLowerCase() === "blacklist"){
        //     sendEmbed(blacklist, message)
        // }
        // if(args[0].toLowerCase() === "whitelist"){
        //     sendEmbed(whitelist, message)
        // }
        // if(args[0].toLowerCase() === "trust"){
        //     sendEmbed(trust, message)
        // }
        // if(args[0].toLowerCase() === "config"){
        //     sendEmbed(config, message)
        // }
        // if(args[0].toLowerCase() === "setup"){
        //     sendEmbed(setup, message)
        // }
        // if(args[0].toLowerCase() === "other"){
        //     sendEmbed(other, message)
        // }
    }
};
