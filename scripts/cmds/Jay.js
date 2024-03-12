module.exports = {
    config: {
        name: "lyn",
        version: "1.0",
        author: "Jay Senpai",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        const lowerCaseBody = event.body.toLowerCase();
        if (lowerCaseBody.includes("lyn") || lowerCaseBody.includes("Lyn") ||
lowerCaseBody.includes("reyes") ||
lowerCaseBody.includes("lyn reyes")) {
            return message.reply(`busy pa master ko`);
        }
    }
};
