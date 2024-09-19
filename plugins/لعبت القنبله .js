let handler = async (m, { conn }) => {
    conn.bomb = conn.bomb || {};
    let id = m.chat,
        timeout = 180000;
    if (id in conn.bomb) return conn.reply(m.chat, 'هذه الدورة لم تنته بعد!', conn.bomb[id][0]);

    const bom = ['💥', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'].sort(() => Math.random() - 0.5);
    const number = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
    const array = bom.map((v, i) => ({
        emot: v,
        number: number[i],
        position: i + 1,
        state: false
    }));

    let teks = "乂 *B O M B*\nأرسل الأرقام *1* - *9* لفتح صندوق الأرقام *9* أدناه:\n\n";
    for (let i = 0; i < array.length; i += 3) {
        teks += array.slice(i, i + 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
    }
    teks += `\nانتهى الوقت : [ *${((timeout / 1000) / 60)} menit* ]\nمتى عندما تحصل على صندوق يحتوي على قنبلة، سيتم خصم النقاط.`;

    let msg = await conn.reply(m.chat, teks, m);
    let { key } = msg;

    let v;
    conn.bomb[id] = [
        msg,
        array,
        setTimeout(() => {
            v = array.find(v => v.emot == '💥');
            if (conn.bomb[id]) conn.reply(m.chat, `انتهى الوقت! القنبلة موجودة في صندوق الأرقام ${v.number}.`, conn.bomb[id][0].key);
            delete conn.bomb[id];
        }, timeout),
        key
    ];

};

handler.help = ["بوملعبت"];
handler.tags = ["game"];
handler.command = /^(بومب)$/i;

export default handler;
