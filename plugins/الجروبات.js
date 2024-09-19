let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n—◉ ${await conn.getName(jid)}\n➤ ${jid} [${chat?.metadata?.read_only ? 'لا يوجد مشاركون' : 'مشارك'}]\n\n`
m.reply(`*قائمة الجروبات الذي البوت بداخلها:*
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(جروبات|grouplist|listadegrupo|gruposlista|listagrupos)$/i
export default handler
