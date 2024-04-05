const fs = require('fs');

module.exports = {
  config: {
    name: "bible",
    version: "1.0",
    author: "SiAM",
    countDown: 5,
    role: 0,
    shortDescription: "This command allows users read bible.",
    longDescription: "This command enables users to play the classic Truth or Dare game. They can choose either 'Truth' or 'Dare' and receive a randomly selected question or challenge.",
    category: "Games",
    guide: {
      en: "To play the Truth or Dare game, use the command '{pn} truth' for a truth question or '{pn} dare' for a dare challenge."
    }
  },

  onStart: async function ({ api, args, message }) {
    
    const [arg1] = args;

    if (!arg1) {
      message.reply("Bibletest.");
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
