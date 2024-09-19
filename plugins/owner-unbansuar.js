let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗] متنساش المنشن يزوز*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗] متنساش المنشن يزوز*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗]تم إلغاء حظر المستخدم*\n* تقدر تستخدم البوت دلوقتي*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^فك-البان$/i
handler.rowner = true
export default handler
