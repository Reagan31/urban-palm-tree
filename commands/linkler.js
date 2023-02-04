const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const site = config.website
    const gizlilik = config.politika
  const embed = new EmbedBuilder()
.setTitle("<a:EmojiGif9:1064496825647763506> Iruen Bağlantılar <a:EmojiGif9:1064496825647763506>")
.setDescription(`[Botu Sunucuna Ekle](${davet})\n[Destek Sunucum](${destek})\n[Gizlilik Politikası](${gizlilik})\n[Web Sayfası](${site})\n[Bota Oy Ver](${topgg})`)
.setColor("#ff0000")
message.channel.send({embeds: [embed]})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "linkler"
};
