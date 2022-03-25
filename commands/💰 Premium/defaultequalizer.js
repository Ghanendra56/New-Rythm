const {
  MessageEmbed
} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: "defaultequalizer",
  category: "💰 Premium",
  aliases: ["default-equalizer", "defaulteq", "default-eq"],
  cooldown: 10,
  usage: "equalizer",
  description: "Toggles if it should use the Default Equalizer on 1. Track start or not! [Default: false]",
  memberpermissions: ["ADMINISTRATOR"],
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //switch the state
    client.settings.set(message.guild.id, !client.settings.get(message.guild.id, "defaulteq"), "defaulteq");
    //send an information message
    return message.reply({
      embeds: [new MessageEmbed()
        .setFooter(client.getFooter(es))
        .setColor(es.color)
        .setTitle(eval(client.la[ls]["cmds"]["settings"]["defaultequalizer"]["variable1"]))
        .setDescription(eval(client.la[ls]["cmds"]["settings"]["defaultequalizer"]["variable2"]))
      ]
    });
  }
}
/**
  * @INFO
  * Bot Coded by SyntaxError The Dev 💜#3044 | https://github.com/Ghanendra56
  * @INFO
  * Work for Syntax Codes Inc. | https://bit.ly/Web_Syntax
  * @INFO
  * Please mention Him / Syntax Codes Inc., when using this Code!
  * @INFO
*/
