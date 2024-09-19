
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ أدخل الرقم الذي تريد إرسال دعوة جماعية إليه\n\n📌 مثال :\n*${usedPrefix + command}* 7605902011`
if (text.includes('+')) throw  `✳️ أدخل الرقم معًا بدون *+*`
if (isNaN(text)) throw ' 📌 أدخل الأرقام فقط بالإضافة إلى رمز البلد الخاص بك بدون مسافات'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)

      await conn.reply(text+'@s.whatsapp.net', `≡ *دعوة لدخول الجروب*\n\nدعاك مستخدم للانضمام إلى هذه المجموعة \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`تم إرسال رابط الدعوة إلى المستخدم`) 

}
handler.help = ['invite <917xxx>']
handler.tags = ['group']
handler.command = ['دعوة','دعوه'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
