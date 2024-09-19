import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/11f2c090454f0afe044ee.png';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = ` 
*◞⛩️بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ⛩️◜*
 ✯≼══━━﹂⛩️﹁━━══≽✯
*◞{إِنَّمَا ٱلتَّوۡبَةُ عَلَى ٱللَّهِ لِلَّذِينَ يَعۡمَلُونَ ٱلسُّوٓءَ بِجَهَٰلَةٖ ثُمَّ يَتُوبُونَ مِن قَرِيبٖ فَأُوْلَٰٓئِكَ يَتُوبُ ٱللَّهُ عَلَيۡهِمۡۗ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمٗا}◜*
✯≼══━━﹂⛩️﹁━━══≽✯
*🏮║اهلا وسهلا يا║《 ${taguser} 》*
*🏮║اسم البوت║《GOJO 》*
*🏮║اسم المطور║《 Omar 》*
*🏮║عدد المستخدمين║《 ${rtotalreg} 》*
*🏮║وقت التشغيل║《 ${uptime} 》*
*🏮║التوقيت║《 ${date} 》*
*🏮║الاصدار║《v.1 》*

*◞🏮 مـلاحـظـة 🛑 ◈◜*
*◞🏮 يـجـب عـلـيـك كـتـابـة نـقـطـة قـبـل كـل أمـر مـثـل ⇠ 『 .اوامر 』◈◜*
✯≼══━━﹂⛩️﹁━━══≽✯

*يرجى الإبلاغ عن أي مشكلة تواجهك وسنعمل على حلها في أقرب وقت ممكن❤️ او استخدم امر رساله-للمطور*

*قسم الجروبات👥*
1. [.الجروب] - معلومات الجروب.
2. [.الاشباح] - الأعضاء غير المتفاعلين في الجروب.
3. [.حذف] - حذف رسالة محددة.
4. [.تحذير] - تحذير شخص (3 تحذيرات وبعدها طرد).
5. [.شيل-التحذير] - إزالة التحذير.
6. [.طرد] - طرد شخص محدد.
7. [.منشن] - منشن لجميع الأعضاء.
8. [.منشني] - منشن لك.
9. [.المشرفين] - قائمة مشرفي الجروب.
10. [.خفض] - خفض رتبة أدمن.
11. [.رفع] - رفع شخص إلى أدمن.
12. [.لينك] - جلب رابط الجروب.
13. [.اعاده] - تغيير رابط الجروب.
14. [.اختفاء] - إخفاء وجودك أونلاين من البوت (للإلغاء [.افك]).
15. [.توب] - عرض توب الجروب.
26. [.تغيرالترحيب] - تغيير رسالة الترحيب.]
27. [.تغيرالمغادره] - تغيير رسالة المغادر]
28. [.ترقيه] - رفع احد مشرف 
29. [.لينك] - يظهرلك لينك الجروب.
30. [.ريستارت] - يغير رابط دعوت الجروب.
31. [.ازالت المشرف] - يزبل احد المشرفين من الاشراف.
32. [.شيل-تحذير] - يزيل تحذير من شخص.
33. [.حذف] - يحذف رسالة محددة.
34. [.دعوه] - دعوت شخص الي الجروب.
35. [.جروب فتح او قفل] 
36. [.تصويت]
37. [.المتصلين] - يظهر لك قائمة المتصلين بالنت.
38. [.استماره] 
39. [.استماره2] 
40. [.تسجيل] يسجل اسمك وعمرك في البوت.
41. [.تشغيل او تعطيل] - تشغيل او تعطيل الميزات.

✯≼══━━﹂⛩️﹁━━══≽✯

*المطور:*
🤖┋*Omar*┋🤖
*https://api.whatsapp.com/send/?phone=01501991015*
‬`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['2'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }
