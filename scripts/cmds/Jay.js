module.exports = {
    config: {
        name: "Jay",
        version: "1.0",
        author: "Jay Senpai",
        countDown: 5,
        role: 0,
        shortDescription: "hindi ito command",
        longDescription: "hindi ito command",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        const lowerCaseBody = event.body.toLowerCase();
        if (lowerCaseBody.includes("Jay") || lowerCaseBody.includes("Lyn") ||
lowerCaseBody.includes("jay") ||
lowerCaseBody.includes("Jay Bohol")) {
            return message.reply(`Master koyan`);
        }
    }
};
