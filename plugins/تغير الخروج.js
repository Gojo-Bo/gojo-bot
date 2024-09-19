let handler = async (m, { conn, text, iwelcimesROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*تم تغيير رسالة المغادرة بنجاح [❗]*')
} else throw `*تم تغيير رسالة الخروج بنجاح [❗],استخدم:*\n*- @user (منشن الشخص الذي غادر)*`
}
handler.help = ['<text>تغيرالمغادره']
handler.tags = ['group']
handler.command = ['تغيرالمغادره'] 
handler.admin = true
export default handler
