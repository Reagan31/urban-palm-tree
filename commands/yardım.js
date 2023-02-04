const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const value = args[0]

  const embed = new diskord.EmbedBuilder()
  .setTitle("Kategoriler")
  .setThumbnail("https://cdn.discordapp.com/avatars/1070791702656327740/1566ff49f86851944a076ac0a668b1e0.webp")
  .setImage("https://cdn.discordapp.com/attachments/1070707349418954823/1070814143336157265/static_2.png")
  .setDescription(`<a:HitEmoji24:1064179882692706435> **!yardım ayarlamalı |** Ayarlamalı yetkili komutlarını gösterir.\n\n<a:HitEmoji24:1064179882692706435> **!yardım eğlence |** Eğlence Komutlarını Gösterir.\n\<a:HitEmoji24:1064179882692706435> **!yardım kullanıcı |** Kullanıcı Komutlarını Gösterir.\n\n<a:HitEmoji24:1064179882692706435> **!yardım yetkili |** Yetkili Komutlarını Gösterir.\n\n<a:HitEmoji24:1064179882692706435> **!yardım bot |** Bot Komutlarını Gösterir\n<a:EmojiGif9:1064496825647763506> **IruenBOT Bağlantılar** <a:EmojiGif9:1064496825647763506>\n[Botu Sunucuna Ekle](${davet})\n[Destek Sunucum](${destek})\n[Bota Oy Ver](${topgg})`)
  if(!args[0]) return message.channel.send({embeds: [embed]})
if(value === "bot") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:HitEmoji31:1064179921972375605> Ana Komutlar <a:HitEmoji31:1064179921972375605>")
.setDescription("**!istatistik |** Botun istatistiklerini gösterir\n**!linkler |** Botla Alakalı Linkleri Alırsınız\n**!oyver |** Botun oy verme linkini ve birkaç bilgi alırsınız\n**!ping |** Botun pingini gösterir")
message.channel.send({embeds: [embed]})
}
if(value === "yetkili") { 
const embed = new diskord.EmbedBuilder()
.setTitle("<a:EmojiGif166:1064205219539451975> Yetkili Komutları <a:EmojiGif166:1064205219539451975>")
.setDescription("**!ban | ** Etiketlediğiniz kişiyi sunucudan yasaklar\n**!ban-list |** Sunucundan Banlanan üyeleri gösterir\n**!forceban |** ID'sini belirttiğiniz kullanıcıyı sunucudan yasaklar\n**!kanal-açıklama |** Bulunduğunuz kanalın konusunu/açıklamasını değiştirir\n**!kick |** İstediğiniz kişiyi sunucudan atar\n**!rol-al** | Belirtilen kullanıcıdan istediğiniz rolü alır\n**!rol-oluştur** | Yazılan Adda Rol Oluşturulur\n**!rol-ver** | Belirtilen kullanıcıya istediğiniz rolü verir")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**!sesli-çek |** Etiketlediğiniz kullanıcıyı yanınıza çeker\n**!temizle |** Belirtilen miktar mesajı siler\n**!unban |** Belirtilen kişinin banını kaldırır\n**!slowmode** | Kanalda yavaşmod'u ayarlarsınız")
message.channel.send({embeds: [embed2]})
}
if(value === "eğlence") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:EmojiGif288:1064221890228518933> Eğlence Komutları <a:EmojiGif288:1064221890228518933>")
.setDescription("**!alkış |** Bot Alkışlar\n**!aşkölçer |** Bot etiketlediğiniz kişiye karşı olan aşkını ölçer\n**!emojiyazı |** Bot mesajınızı emoji haline getirir\n**!hackle |** Etiketlediğiniz kişiyi hackler\n**!kaçcm |** Malafatının uzunluğunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**!sarıl |** Etiketlediğiniz kişiye sarılırsınız\n**!slot |** Slots oyununu oynar\n**!şanslısayım |** Bot Şanslı sayınızı tahmin eder")
message.channel.send({embeds: [embed2]})
}
if(value === "kullanıcı") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:EmojiGif3:1064496804705619978> Kullanıcı Komutları <a:EmojiGif3:1064496804705619978>")
.setDescription("**!afk |** AFK olunca seni etiketleyen kişiye sebebini yazar\n**!atatürk |** Rastgele bir Atatürk fotoğrafı gönderir\n**!avatar |** Etiketlediğiniz kişinin avatarını gösterir\n**!emojiler |** Sunucuda bulunan emojileri gösterir\n**!hesapla |** Belirtilen işlemi yapar\n**!kurucu-kim |** Sunucunun kurucusunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**!minecraft |** Belirlediğiniz Minecraft sunucusunun bilgilerini verir\n**!not-al |** Bot not alır\n**!notum |** Notunuzu gösterir\n**!radyo |**  Sesli kanaldan Radyo dinlersiniz\n**!sunucubilgi |** Bulunduğun sunucu hakkında bilgi verir")
message.channel.send({embeds: [embed2]})
}
if(value === "ayarlamalı") {
const embed = new diskord.EmbedBuilder()
.setTitle("<a:HitEmoji28:1064179901357375508> Ayarlamalı Komutları <a:HitEmoji28:1064179901357375508>")
.setDescription("**!küfürengel |** Küfür engelleme sistemini ayarlamanızı sağlar\n**!reklamengel |** Reklam engelleme sistemini ayarlamanızı sağlar\n**!oto-cevap |** Belirtilen yazıyı biri yazarsa bot belirtilen cevabı vermeye ayarlanır\n**!otorol |** Sunucuya girenlere verilecek olan otorolü ayarlar\n**!ototag |** Bot belirtilen tagı sunucuya girenlerin isimlerinin başına koyar\n**!sa-as |** Oto sa-ası ayarlarsınız\n**!sayaç |** Sayacı ayarlarsınız")
message.channel.send({embeds: [embed]})
}
}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "yardım"
}