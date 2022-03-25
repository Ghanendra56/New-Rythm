const playermanager = require(`${process.cwd()}/handlers/playermanager`);
module.exports = {
  name: `addsimilar`,
  category: `🎶 Music`,
  aliases: [`adds`, `addrelated`, `addr`],
  description: `Adds a similar song of the current Track to the Queue!`,
  usage: `addsimilar`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "previoussong": false
  },
  type: "queue",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //execute the code
    playermanager(client, message, Array(`https://www.youtube.com/watch?v=${player.queue.current.identifier}&list=RD${player.queue.current.identifier}`), `similar:add`);
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