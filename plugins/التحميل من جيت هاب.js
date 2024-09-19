import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `Example user ${usedPrefix}${command} https://github.com/noureddineouafy/BOBIZA-BOT`
    if (!regex.test(args[0])) throw 'wrong link!'
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filename=Nurutomo-wabot-aq-v2.5.1-251-g836cccd.zip'
    m.reply(`*انتظر قليلا..*\n*جاري تحميل المشروع المرجو الانتطار قليلا*`)
    conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone']
handler.tags = ['downloader']
handler.command = /جيت/i

handler.limit = false

export default handler
