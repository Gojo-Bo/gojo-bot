let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[❗معلومه❗] المستخدم ${conn.getName(m.sender)} سيكون غير نشط (𝙰𝙵𝙺), من فضلك لا تمنشن*\n\n*—◉ سبب الاختفاء (𝙰𝙵𝙺)${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^اختفاء|الاختفاء|افك|afk$/i
export default handler
