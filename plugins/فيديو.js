import ytdl from 'ytdl-core';
import fs from 'fs';
import os from 'os';

let limit = 500;
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `✳️ Example:\n${usedPrefix + command} https://youtube.com/watch?v=GvabaWHngzU`;
  if (!args[0].match(/youtu/gi)) throw `❎ التحقق من رابط اليوتيوب`;

  let chat = global.db.data.chats[m.chat];
  try {
    const info = await ytdl.getInfo(args[0]);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
    if (!format) {
      throw new Error('لم يتم العثور على تنسيقات صالحة');
    }

    if (format.contentLength / (1024 * 1024) >= limit) {
      return m.reply(`≡ *GURU YTDL*\n\n▢ *⚖️Size*: ${format.contentLength / (1024 * 1024).toFixed(2)}MB\n▢ *🎞️Quality*: ${format.qualityLabel}\n\n▢ يتجاوز الملف حد للتنزيل *+${limit} MB*`);
    }

    const tmpDir = os.tmpdir();
    const fileName = `${tmpDir}/${info.videoDetails.videoId}.mp4`;

    const writableStream = fs.createWriteStream(fileName);
    ytdl(args[0], {
      quality: format.itag,
    }).pipe(writableStream);

    writableStream.on('finish', () => {
      conn.sendFile(
        m.chat,
        fs.readFileSync(fileName),
        `${info.videoDetails.videoId}.mp4`,
        `✼ ••๑⋯❀ Y O U T U B E ❀⋯⋅๑•• ✼

      ❏ العنوان: ${info.videoDetails.title}
      ❐ مدة: ${info.videoDetails.lengthSeconds} seconds
      ❑ المشاهدات: ${info.videoDetails.viewCount}
      ❒ رفع: ${info.videoDetails.publishDate}
      ❒ الرابط: ${args[0]}

      ⊱─━⊱༻●༺⊰━─⊰`,
        m,
        false,
        { asDocument: chat.useDocument }
      );

      fs.unlinkSync(fileName); // Delete the temporary file
    });

    writableStream.on('error', (error) => {
      console.error(error);
      m.reply('حدث خطأ أثناء محاولة تنزيل الفيديو. حاول مرة اخرى.');
    });
  } catch (error) {
    console.error(error);
    m.reply('حدث خطأ أثناء محاولة معالجة الفيديو. حاول مرة اخرى.');
  }
};

handler.help = ['ytmp4 <yt-link>'];
handler.tags = ['dl'];
handler.command = ['فيديو3'];
handler.diamond = false;

export default handler;
