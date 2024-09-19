import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ اكتب الي عايز تدور عليه وياريت انجليزي عشان يتطبق الامر صح ✅?\n📌 مثال  : ${usedPrefix + command} ITACHI`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*تم💌:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['بين'] 

export default handler
