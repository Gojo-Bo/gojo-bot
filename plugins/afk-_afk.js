export function before(m) {
  let user = global.db.data.users[m.sender]
  if (user.afk > -1) {
      m.reply(`
*[❗𝐈𝐍𝐅𝐎❗] رجع من الاختفاء (𝙰𝙵𝙺)${user.afkReason ? ' بعد الاختفاء (𝙰𝙵𝙺) السبب: ' + user.afkReason : ''}*

*—◉ مده الاختفاء (𝙰𝙵𝙺): ${(new Date - user.afk).toTimeString()}*
`.trim())
      user.afk = -1
      user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
      let user = global.db.data.users[jid]
      if (!user)
          continue
      let afkTime = user.afk
      if (!afkTime || afkTime < 0)
          continue
      let reason = user.afkReason || ''
      m.reply(`*[❗] لا تجعلها فارغه [❗]*

*—◉ المستخدم غير نشط الان (𝙰𝙵𝙺)*      
*—◉ ${reason ? 'سبب الاختفاء (𝙰𝙵𝙺): ' + reason : 'سبب الاختفاء (𝙰𝙵𝙺): _لم تحدد سببا_'}*
*—◉ وقت الاختفاء (𝙰𝙵𝙺): ${(new Date - afkTime).toTimeString()}*
`.trim())
  }
  return true
}
