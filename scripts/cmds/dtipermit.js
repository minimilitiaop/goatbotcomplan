module.exports = {
  config: {
    name: "dtipermit",
    version: "",
    author: "jay",
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
    guide: ""
  },

  onStart: async function ({ message, api, event }) {
    const imgURLs = [
      "https://i.imgur.com/O8FUif1.jpg",
      "https://i.imgur.com/E1NbMQp.jpg"
    ];

    for (const imgURL of imgURLs) {
      const att = {
        attachment: await global.utils.getStreamFromURL(imgURL)
      };
  
      await api.sendMessage(att, event.threadID);
    }
  },

  onChat: async function ({ message, api, event }) {
    const body = event.body && event.body.toLowerCase();
    const dtiPhrases = ["dti permit", "pngi dti permit", "padrop dti permit", "may dti permit po ba tayu", "anong dti permit dito", "dti"];
  
    const containsDti = dtiPhrases.some(phrase => body.includes(phrase));
  
    if (containsDti) {
      await this.onStart({ message, api, event });
    } else {
      // Handle other chat scenarios if needed
    }
  }
};
