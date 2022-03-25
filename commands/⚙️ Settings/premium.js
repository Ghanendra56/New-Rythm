const {
  MessageEmbed,
  MessageActionRow,
  MessageButton
} = require(`discord.js`);
const config = require(`${process.cwd()}/botconfig/config.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: `premium`,
  category: `⚙️ Settings`,
  description: `Requests Premium for this Server`,
  usage: `premium`,
  memberpermissions: [`ADMINISTRATOR`],
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    if (client.premium.get("global", "guilds").includes(message.guild.id)) {
      return message.reply(`❌ **This Guild is already a \`PREMIUM-GUILD\`**`)
    }
    let theowner = "NO OWNER DATA! ID: ";
    await message.guild.fetchOwner().then(({
      user
    }) => {
      theowner = user;
    }).catch(() => {})
    let embed = new MessageEmbed()
      .setColor("GREEN")
      .setTitle(`✅ A new Server requests **PREMIUM**`)
      .addField("Guild Info", `>>> \`\`\`${message.guild.name} (${message.guild.id})\`\`\``)
      .addField("Owner Info", `>>> \`\`\`${theowner ? `${theowner.tag} (${theowner.id})` : `${theowner} (${message.guild.ownerId})`}\`\`\``)
      .addField("Member Count", `>>> \`\`\`${message.guild.memberCount}\`\`\``)
      .addField("Requested By:", `>>> \`\`\`${message.author.tag} (${message.author.id})\`\`\``)
      .setThumbnail(message.guild.iconURL({
        dynamic: true
      }))
      .setFooter(client.getFooter(`${message.author.id}-${message.guild.id}`, message.author.displayAvatarURL({
        dynamic: true
      })))
    for (const owner of config.ownerIDS) {
      client.users.fetch(owner).then(user => {
        user.send({
          embeds: [embed],
          components: [
            new MessageActionRow().addComponents([
              new MessageButton().setStyle("SUCCESS").setEmoji("✅").setCustomId("PREMIUM-ACCEPT").setLabel("Accept"),
              new MessageButton().setStyle("DANGER").setEmoji("❌").setCustomId("PREMIUM-DENY").setLabel("Deny")
            ])
          ]
        }).catch(() => {});
      }).catch(() => {});
    }
    return message.reply(`✅ **APPLIED FOR PREMIUM**`)
  }
};
/**
  * @INFO
  * Bot Coded by SyntaxError The Dev 💜#3044 | https://github.com/Ghanendra56
  * @INFO
  * Work for Syntax Codes Inc. | https://bit.ly/Web_Syntax
  * @INFO
  * Please mention Him / Syntax Codes Inc., when using this Code!
  * @INFO
*/