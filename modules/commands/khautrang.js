const fs = require("fs");
module.exports.config = {
name: "Đeo khẩu trang",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Đeo khẩu trang",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Đeo khẩu trang")==0 || (event.body.indexOf("đeo khẩu trang")==0)) {
		var msg = {
				body: "Bộ y tế thông báo",
				attachment: fs.createReadStream(__dirname + `/noprefix/khautrang.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}