const fs = require('fs');

module.exports = {
  config: {
    name: "bible",
    version: "1.0",
    author: "Jay",
    countDown: 5,
    role: 0,
    shortDescription: "This command allows users read bible.",
    longDescription: "This command enables users to read bible",
    category: "Games",
    guide: {
      en: "To read bible verse tagalog, use the command '{pn}bible tagalog.' "
    }
  },

  onStart: async function ({ api, args, message }) {
    
    const [arg1] = args;

    if (!arg1) {
      message.reply("Bible verse");
      return;
    }

     if (arg1.toLowerCase() === 'tagalog') {
      const dareChallenges = JSON.parse(fs.readFileSync(`${__dirname}/assist_json/bible.json`));
      const randomIndex = Math.floor(Math.random() * dareChallenges.length);
      const randomChallenge = dareChallenges[randomIndex];

      message.reply(`Here's your bible: ${randomChallenge}`);
    } else {
      message.reply("Invalid input. Please use '/bible'");
    }
  }
};
