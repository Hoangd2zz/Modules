const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "đấm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng",
  description: "Đấm đứa bạn ghét",
  commandCategory: "Hình Ảnh",
  usages: "đấm",
  cooldowns: 5,
  dependencies: ["request","fs","axios"]
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                if (args.join().indexOf('@') !== -1)
        var link = [
          "https://i.imgur.com/Fj7niZ8.gif",
             ];
   var callback = () => api.sendMessage({body:`Con Chó Bố Đấm Chết Mẹ Mày😈`
  ,attachment: fs.createReadStream(__dirname + "/cache/dam.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/dam.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/dam.jpg")).on("close",() => callback());
   };