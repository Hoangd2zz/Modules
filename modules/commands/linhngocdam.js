module.exports.config = {
	name: "linhngocdam",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "huy hoàng và hoàng",
	description: "Random ảnh linh ngọc đàm :))",
	commandCategory: "Hình Ảnh",
	usages: "linhngocdam",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://apivuduchoang.duchoangit.com/linhngocdam/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/linhngocdam.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/linhngocdam.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/linhngocdam.${ext}`)).on("close", callback);
			})
}
