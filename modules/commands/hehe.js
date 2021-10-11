const fs = require("fs");
module.exports.config = {
name: "hehe",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Hehe",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hehe")==0 || (event.body.indexOf("Hehe")==0)) {
		var msg = {
				body: "heheeeeeeeee",
				attachment: fs.createReadStream(__dirname + `/noprefix/heheboy.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}