const {
  MessageEmbed
} = require(`discord.js`);
const config = require(`${process.cwd()}/botconfig/config.json`);
module.exports = {
  name: `join`,
  category: `🎶 Music`,
  aliases: [`summon`, `create`],
  description: `Summons the Bot in your Channel`,
  usage: `join`,
  parameters: {
    "type": "radio",
    "activeplayer": false,
    "previoussong": false
  },
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    var {
      channel
    } = message.member.voice;
    if (!channel)
      return message.reply({
        embeds: [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setTitle(client.la[ls].common.join_vc)
        ]
      });
    //if no args return error
    var player = client.manager.players.get(message.guild.id);
    if (player) {
      
      var vc = player.voiceChannel;
      var voiceChannel = message.guild.channels.cache.get(player.voiceChannel);
      return message.reply({
        embeds: [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setTitle(client.la[ls].common.wrong_vc)
          .setDescription(eval(client.la[ls]["cmds"]["music"]["join"]["variable1"]))
        ]
      });
    }
    //create the player
    player = await client.manager.create({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel.id,
      selfDeafen: config.settings.selfDeaf,
    });
    //join the chanel
    if (player.state !== "CONNECTED") {
      await player.connect();
      await message.react("🎙").catch(e => {});
      await player.stop();
      return message.reply({
        embeds: [new MessageEmbed()
          .setColor(es.color)
          .setTitle(client.la[ls].cmds.music.join.title)
          .setDescription(eval(client.la[ls]["cmds"]["music"]["join"]["variable2"]))
        ]
      });
    } else {
      return message.reply({
        embeds: [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setTitle(client.la[ls].common.wrong_vc)
          .setDescription(eval(client.la[ls]["cmds"]["music"]["join"]["variable3"]))
        ]
      });
    }
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