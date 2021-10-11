const fs = require("fs");
module.exports.config = {
name: "Oh my God",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Oh my God",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Oh my God")==0 || (event.body.indexOf("Oh my God")==0)) {
		var msg = {
				body: "Vãiiiiiii",
				attachment: fs.createReadStream(__dirname + `/noprefix/omg.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}