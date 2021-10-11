const fs = require("fs");
module.exports.config = {
	name: "plz",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Lâm", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "plz",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("plz")==0 || (event.body.indexOf("please")==0 || (event.body.indexOf("Please")==0 || (event.body.indexOf("Plz")==0)) {
		var msg = {
				body: " lam on di ma 🥺🥺",
				attachment: fs.createReadStream(__dirname + `/noprefix/plz.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}