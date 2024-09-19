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
*🏮║اسم البوت║《 gojo 》*
*🏮║اسم المطور║《 Omar 》*
*🏮║عدد المستخدمين║《 ${rtotalreg} 》*
*🏮║وقت التشغيل║《 ${uptime} 》*
*🏮║التوقيت║《 ${date} 》*
*🏮║الاصدار║《v.1 》*

*◞🏮 مـلاحـظـة 🛑 ◈◜*
*◞🏮 يـجـب عـلـيـك كـتـابـة نـقـطـة قـبـل كـل أمـر مـثـل ⇠ 『 .اوامر 』◈◜*
✯≼══━━﹂⛩️﹁━━══≽✯

*يرجى الإبلاغ عن أي مشكلة تواجهك وسنعمل على حلها في أقرب وقت ممكن❤️ او استخدم امر رساله-للمطور*

*قسم الأدوات⚙️*
1. [.بحث] - بحث في جوجل.
2. [.ترجمه] - ترجمة لأي لغة.
3. [.تحميل] - تحميل أي ملف.
4. [.ميديافاير] - تحميل ملف من ميديافاير.
5. [.تطبيق] - نحميل اي تطبيق. 
7. [.باركود] - تحويل الرابط إلى باركود.
9. [.عميق] - تغيير الصوت إلى صوت عميق.
12. [.جيف] - تحويل الفيديو إلى GIF.
14. [.لفيديو] - تحويل الستيك إلى فيديو.
15. [.لصوت] - تحويل الفيديو إلى صوت.
16. [.سرقه] - سرقة ستيك.
17. [.زخرفه] - زخرفة النص.
18. [.انطق] - تحويل النص إلى صوت.
19. [.دمج] - دمج إيموجيين.
20. [.لريك] - تحويل الصوت إلى ريك.
21. [.تليجراف] - تحويل الملف إلى رابط.
22. [.فري بيك] - البحث عن صورة.
23. [.قطه] - صورة قطة.
24. [.بروفايلي] - ملفك الشخصي.
25. [.بنك]
26. [.لستيكر] - تحويل الصورة إلى ملصق.
27. [.اقول]
28. [.جروب فتح او قفل]
29. [.تصميم] - يعملك صوره فيها الي هتكتبه.
30. [.رمزي] - يظهر رقمك التسلسلي.
31. [.ويكي] - يبحث لك علي اي شيء في موقع ويكي بيديا.
32. [.الطقس]
33. [.فيك] - يعمك ايميل فيك.
34. [.بنج] - يوريك سرعت نت.
35. [.مسح] - يمسحلك خلفيت اي صوره.
36. [.3فيديو] - يجيبلك اي فيديو من اليوتيوب ويحمله لك.
37. [.2فيديو] - يجيبلك اي قناهبدون تحميل
38. [.درايف] - يحملك اي ىملف من جوجل درايف.
39. [.mp3] - يجيبلك اي اغنيه من اليوتيوب ويحمله لك.
40. [.تطبيق] -  جلب أي تطبيق باسمه.
41. [.apk] - تحميل اي تطبيق
42. [.تيكتوك] - يحملك اي فيديو من تيكتوك.
43. [.بين] - يجبلك صوره من بينترست.
44. [.تغير-حقوق] - تغير حقوق الملصق.
45. [.جيت] - يحملك اي مشروع من جيت هاب.
46. [.جوده] - يحسنلك جودت اي صوره.
47. [.بوت] - يجيبلك الذكاء الاصطناعي لك.
48. [.لريك] - يحولك الفيديو لصوت.
49. [.وانو] - يستخدم الذكاء الاصطناعي وانو.
50. [.رفع-صوره] - يرفعلك اي صوره.
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
handler.command = ['4'] 

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
