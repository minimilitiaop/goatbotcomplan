
module.exports = {
    config: {
        name: "complan",
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
        if (lowerCaseBody.includes("complan") || lowerCaseBody.includes("ano complan") || lowerCaseBody.includes("ano complan dito")) {
            return message.reply(` 💟GUESS AND CLICK EARNING MESSENGER BOT COMPLAN💟
🌈G.C.E.M.B.🌈
💲DOLLAR RATE💲
💳NO SAFETY NET💳             ✅NO MANDATORY RAFFLE✅
✅EVERYDAY PAYOUT✅
🎯NON STOP CLICKING🎯
✅OPTIONAL INVITING😍

      🎯LAUNCHED DATE:
      ➡OCTOBER 02, 2023⬅
            ____________________________

      💃OWNER:
      -Malyn Nava-

      ADMIN:
      Maria Dionco
      Rosemarie Ogsimer
      Angelica Lorezo

      CHECKER/ACTIVATOR:
      Tiffany Baradas
            ____________________________

    ✍REGISTRATION FEE:
    💳100 php GCASH only

            ____________________________

   🌈CATEGORIES🌈
    ▶GUESS THE COLOR
    ▶GUESS THE SHAPE
    ▶GUESS THE ANIMAL

            ____________________________

     🌈BOT INFORMATION:
▶0.0010💲 FIXED RATE           ▶20 secs. INTERVAL per REPLY                                  ▶0.50💲 DRB POINTS          ▶0.10💲 welcome bonus
▶DTI REGISTERED✅              ▶NO COLLAGE

            ____________________________

       🌈RPO DETAILS🌈
       ▶ EVERYDAY
       Monday to Sunday
       (ANYTIME)

✅SS OF FULL PROFILE          ✅AND DETAILED RPO FORM ON CHAT SUPPORT 

🥰MUST ON-TIME          ENCASHMENT AND REQUEST✅

      ✅24 HOURS PROCESS ONLY DEPENDS ON RPOs DEMANDS
      ✅CONTINUES CLICKING MEANS NONSTOP🤩

        💳RPO AMOUNT💳
        🎯Minimum of 
        3💲 to 20💲 Maximum 🤩

  🛑BTZ AFTER REQUEST PAYOUT✅
            ____________________________

🌈RULES AND REGULATIONS TO FOLLOW

       ▶NO TO SPAMMING (VOID&BTZ & kicked out)
       ▶SENDING LIKE, ETC... LESS 0.10 points
       ▶renewal of account starting from 2nd rpo
       (100 php fee)
       ▶NO VOID ON RPO LIBAN SA SPAMMING 
       ▶NO TO PROMOTING ON GCs (KICKED OUT)
       ▶NO TO REFUND POLICY
       ▶RESPECT EACH OTHER AND OTHERS' OPINION

            ____________________________

    🛑STRICTLY NO REFUND POLICY🛑
  ✅INVEST WHAT YOU CAN AFFORD TO LOSE✅

    🌈PAY-IN NOW✅
    🌈START NOW✅
    🌈SUCCESS IN FUTURE✅
    🌈HAPPY EARNINGS🌈`);
        }
    }
};
