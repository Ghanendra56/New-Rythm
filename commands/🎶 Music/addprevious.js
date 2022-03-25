const playermanager = require(`${process.cwd()}/handlers/playermanager`);
module.exports = {
  name: `addprevious`,
  category: `🎶 Music`,
  aliases: [`addp`, `addpre`, `addprevius`, `addprevios`],
  description: `Adds the previous song to the Queue again!`,
  usage: `addprevious`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "previoussong": true
  },
  type: "queue",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //adds/plays it
    playermanager(client, message, Array(player.queue.previous.uri), player.queue.previous.uri.includes(`soundcloud`) ? `song:soundcloud` : `song:raw`);
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