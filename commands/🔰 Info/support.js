const {
  MessageEmbed,
  MessageActionRow
} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  MessageButton
} = require('discord.js')
module.exports = {
  name: "support",
  category: "🔰 Info",
  usage: "invite",
  description: "Sends you the Support Server Link",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let button_public_invite = new MessageButton().setStyle('LINK').setLabel('Invite Public Bot').setURL("https://discord.com/api/oauth2/authorize?client_id=933729834901860382&permissions=8&scope=bot")
    let button_support_dc = new MessageButton().setStyle('LINK').setLabel('Support Server').setURL("https://dsc.gg/syntaxerrorthedev")
    let button_invite = new MessageButton().setStyle('LINK').setLabel('Invite this Bot').setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
    //array of all buttons
    const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
    message.reply({
      embeds: [new MessageEmbed()
        .setColor(ee.color)
        .setTitle(client.la[ls].cmds.info.support.title)
        .setDescription(eval(client.la[ls]["cmds"]["info"]["support"]["variable1"]))
        .setFooter('Clan Bot | powered by Syntax Codes Inc.', 'https://cdn.discordapp.com/icons/950734695346348113/8c0af73c4448d0ca77d0720a050c9761.webp?size=1024')

      ],
      components: allbuttons
    });
  }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://discord.gg/milrato
 * @INFO
 * Work for Milrato Development | https://milrato.dev
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
