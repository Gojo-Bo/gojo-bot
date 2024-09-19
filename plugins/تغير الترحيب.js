let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*تم تغيير الترحيب بنجاح. [❗]*')
} else throw `*[❗]يرجى كتابة رساله لتغير الترحيب, استخدم:*\n*- @user (منشن الشخص الذي دخل)*\n*- @group (اسم القروب)*\n*- @desc (وصف القروب)*`
}
handler.help = ['<text> تغيرالترحيب']
handler.tags = ['group']
handler.command = ['تغيرالترحيب'] 
handler.admin = true
export default handler
