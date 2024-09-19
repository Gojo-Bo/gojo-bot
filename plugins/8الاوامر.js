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

*قسم المطور👨🏼‍💻*
1. [.بلاغ] - التواصل مع المطور.
2. [.نشر] - نشر رسالة لجميع مستخدمي البوت.
3. [.جروبات] - جلب جميع الجروبات التي بداخلها البوت.
4. [.بريم] - تمييز شخص.
5. [.خفض-التميير] - خفض تمييز شخص.
6. [.المستخدين] - عدد مستخدمي البوت.
7. [.حظر | فك-حظر] - حظر أو فك حظر شات.
8. [.المحظورين] - قائمة المحظورين.
9. [.بان | فك البان] - حظر أو فك حظر مستخدم.
10. [.بلوك | رفع بلوك] - حظر أو رفع الحظر.
11. [.البلوكات] - قائمة المحظورين.
12. [.انضم] - دخول جروب.
13. [.أخرج] - خروج من جروب.
14. [.المميزين] - قائمة المميزين.
15. [.اضف-الماس] - إضافة ماس.
16. [.اضف-اكسبي] - إضافة اكسبي.
17. [.ادمن] - رفع شخص إلى أدمن في الجروب.
15. [.تغير] - يغير صورت بروفايل البوت.
16. [.وقت-التشغيل] - وقت تشغيل البوت.
16. [.رسترت-البوت] - إعادة تشغيل البوت.
17. [.البوت-خاص] - يوريك مستخدمين البوت في الخاص.
18. [.ميزه] - يجبلك اي كود من اكواد البوت.

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
handler.command = ['8'] 

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
