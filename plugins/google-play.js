import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'apk') {
      if (!text) throw `🎯حط اسم العبه اللي عايز او التطبيق اللي عايز تنزله وانتظر حتي تتم العملية.`;

      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '*⚠️The File Is Too Large.*' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '*⚠️The File Is Too Large.*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      );
    }
  } catch {
    throw `*❌حدث خطأ حط لينك او اسم العبه اللي عايز تنزلها.*`;
  }
};

handler.command = /^بلاي/i;
export default handler;
