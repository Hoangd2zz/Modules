module.exports.config = {
	name: "vipmen",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Lien he vs Admin bot",
	commandCategory: "Info", 
	usages: "vipmen [key]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Bot hiện đang có  3 vipmen\n👉 1 NGuyễn Ngọc Thanh Quỳnh\nLink:\https://www.facebook.com/nguyenngocquynh.thanh\n👉 2 Chị Kim Thanh\nLink:\https://www.facebook.com/LunNhoiii\n👉 3 Chị Nguyễn Hà My\nLink: \https://www.facebook.com/profile.php?id=100054559712263 \n🌱 bấm !vipmen số thứ tự để xem số tiền của người ủng hộ",event.threadID, event.messageID);
	}
	if (args[0] == "1") {
		return api.sendMessage("==== vipmen 1 ====\nSố tiền: Ẩn", event.threadID, event.messageID);
	}
	else if (args[0] == "2") {
		return api.sendMessage("==== vipmen 2 ====\nSố tiền: Ẩn", event.threadID, event.messageID);
	}
	else if (args[0] == "3") {
		return api.sendMessage("==== vipmen 2 ====\nSố tiền: Ẩn", event.threadID, event.messageID);
	}
}