module.exports = {
  config: {
    name: "mop",
    version: "",
    author: "",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "no prefix"
    },
    longDescription: {
      vi: "",
      en: "no prefix"
    },
    category: "no prefix",
    guide: "",
  },

  onStart: async function ({ message, api, event }) {
    const imgURL = "https://i.imgur.com/nGIRCrx.jpeg";

    const att = {
      attachment: await global.utils.getStreamFromURL(imgURL)
    };

    api.sendMessage(att, event.threadID);
  },

  onChat: async function ({ message, api, event }) {
    const body = event.body && event.body.toLowerCase();
    const mopPhrases = ["mop", "anong mop dito", "may mop ba dito?", "mop ka ba?", "anong mop ba dito?"];

    const containsMop = mopPhrases.some(phrase => body.includes(phrase));

    if (containsMop) {
      await this.onStart({ message, api, event }); // Await the onStart function
    } else {
      // Handle other chat scenarios if needed
    }
  }
};
