module.exports.config = {
    name: "adminbot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "duylam",
    description: "Admin",
    commandCategory: "Admin",
    usages: "adminbot",
    cooldowns: 5,
    dependencies: ["request"],
};

module.exports.run = ({ api, event, args }) => {
    const request = require("request");
    if (!args[0] || typeof parseInt(args[0]) !== "number") return api.sendMessage(`꧁ 𝐂𝐇À𝐎 𝐍𝐇Ữ𝐍𝐆 𝐍𝐆ƯỜ𝐈 𝐒Ử 𝐃Ụ𝐍𝐆 𝐁𝐎𝐓 ꧂\nミ★Thông Tin Admin Bot Này★彡\n𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘 : Tống Văn Huy Officall\n𝑩𝒊𝒆̣̂𝒕 𝒅𝒂𝒏𝒉 : Bot Cute\n𝑮𝒊𝒐̛́𝒊 𝒕𝒉𝒊𝒆̣̂𝒖 : Hiện Tại Sáng Làm Phụ Hồ Tối Viết Code Và Bán Like, Follow Dạo SốnG Qua Ngày\n𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵 : Vui Vẻ Thân Hiện Hòa Đồng Nhưng Cục Súc Với Bọn Spam Bot\n𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼 : 1m8x\n𝑺𝒊𝒏𝒉 𝑵𝒈𝒂̀𝒚 : 26/10/199x\n𝑳𝒊𝒆̂𝒏 𝑯𝒆̣̂ : 0777.043.869 \n𝐈𝐃 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 100043016100604 \n𝗡𝗮𝗺𝗲 𝗜𝗗 : Tống Văn Huy Officall \n𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐚𝐝𝐦𝐢𝐧 : https://www.facebook.com/100043016100604\n𝑽𝒂̀𝒊 𝒍𝒐̛̀𝒊 𝒕𝒐̛́𝒊 𝒃𝒂̣𝒏 𝒅𝒖̀𝒏𝒈 : Vui lòng không spam khi sử dụng và trân thành cảm ơn bạn đã sử dụng sản phẩm\n𝙇𝙪̛𝙪 𝙮́ : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\n𝑪𝒂̉𝒏𝒉 𝒃𝒂́𝒐 : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\nChúc bạn sử dụng vui vẻ <3\n=== Tống Văn Huy ===`, event.threadID, event.messageID);
    return request(`https://nhentai.net/api/gallery/${parseInt(args[0])}`, (error, response, body) => {
        var codeData = JSON.parse(body);
        if (codeData.error == true) return api.sendMessage(getText('cantFindHentai'), threadID, messageID);
        const title = codeData.title.pretty;
        var tagList = [],
            artistList = [],
            characterList = [];
        codeData.tags.forEach(item => (item.type == "tag") ? tagList.push(item.name) : (item.type == "artist") ? artistList.push(item.name) : (item.type == "character") ? characterList.push(item.name) : '');
        var tags = tagList.join(', ');
        var artists = artistList.join(', ');
        var characters = characterList.join(', ');
        if (characters == '') characters = 'Original';
        api.sendMessage(`» Tên: ${title}\n» Tác giả: ${artists}\n» Nhân vật: ${characters}\n» Tags: ${tags}\n» Liên kết: https://nhentai.net/g/${args[0]}`, event.threadID, event.messageID);
    });
}