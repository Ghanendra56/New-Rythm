const {
  MessageEmbed
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  MessageButton,
  MessageActionRow
} = require('discord.js')
const {
  handlemsg
} = require(`${process.cwd()}/handlers/functions`)
module.exports = {
  name: "developer",
  category: "🔰 Info",
  aliases: ["dev", "SyntaxError"],
  description: "Shows Information about the Developer",
  usage: "developer",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let button_public_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.invite).setURL("https://discord.com/api/oauth2/authorize?client_id=933729834901860382&permissions=8&scope=bot")
    let button_support_dc = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.dc).setURL("https://dsc.gg/syntaxerrorthedev")
    let button_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.botlist).setURL(`https://bit.ly/Web_Syntax`)
    const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
    message.reply({
      embeds: [new MessageEmbed()
        .setColor(es.color)
        .setFooter(es.footertext + " | Sponsor: Bittmax.de | Code  'x10'  == -5%", es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL())
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/avatars/780327720214069308/0252db1bc993b1728ac34f813a81e459.webp?size=4096")
        .setTitle(client.la[ls].cmds.info.developer.title)
        .setURL("https://bit.ly/Web_Syntax")
        .setDescription(client.la[ls].cmds.info.developer.description)
      ],
      components: allbuttons
    }).catch(error => console.log(error));

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
