module.exports = {
	config: {
		name: "magsorryka",
		version: "1.0",
		author: "Xemon",
		role: 2,
		category: "texts",
		guide: {
			vi: "Not Available",
			en: "cpx @(mention)"
		} 
	},

  onStart: async function ({ api, event, userData, args }) {
      var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Need to tag 1 friend whome you want to scold with bad words", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = []; 
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
setTimeout(() => {a({body: "Sorry " + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Sorry pooo" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "sorry po plsss" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Sorry naaaa🙁" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Sorrry na nga dbaaa🥺" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Sori na kasiiii😭" + " " + name, mentions: arraytag})}, 14000);
setTimeout(() => {a({body: "Sorry naaapooo flesss" + " " + name, mentions: arraytag})}, 16000);
setTimeout(() => {a({body: "Sorrrnaaaaaa" + " " + name, mentions: arraytag})}, 18000);
setTimeout(() => {a({body: "Sorry naaaaa 🥺" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Bati na tayu plsssss" + " " + name, mentions: arraytag})}, 22000);
setTimeout(() => {a({body: "Patawarin munakooo plss" + " " + name, mentions: arraytag})}, 2400);
setTimeout(() => {a({body: "Bati naba tayu?" + " " + name, mentions: arraytag})}, 26000);
setTimeout(() => {a({body: "Bati na tayuu ohhh:<" + " " + name, mentions: arraytag})}, 28000);
setTimeout(() => {a({body: "kiss nga kung bati na💋" + " " + name, mentions: arraytag})}, 30000);
setTimeout(() => {a({body: "Sorry na ngaaa " + " " + name, mentions: arraytag})}, 32000);
setTimeout(() => {a({body: "bahala kanga jan😒" + " " + name, mentions: arraytag})} , 34000);
  }
};
