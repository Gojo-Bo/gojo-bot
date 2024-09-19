//https://whatsapp.com/channel/0029VaWuSkHGehEKy41ibw3k

let handler = m => m
handler.all = async function (m) {

    if (m.messageStubType == 9 && m.message) { // Check if it's a sticker message
        let stickerId = m.message.stickerMessage.fileSha256.toString('base64');
        let stickerUrl = `https://stickershop.line-scdn.net/stickershop/v1/sticker/${stickerId}/android/sticker.png`;
        this.sendFile(m.chat, stickerUrl, 'sticker.png', '🤖', m);
        return true; // Return true to indicate message is handled
    }

    if (/^اه$/i.test(m.text) ) {
      let av = 'https://telegra.ph/file/c48f4ff95ec8882ebca66.jpg'
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
      return true; // Return true to indicate message is handled
    }

    if (/^ناعم$/i.test(m.text) ) {
       let av = 'https://telegra.ph/file/73d152270a35f496c3af5.jpg'
       this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
       return true; // Return true to indicate message is handled
    }


    if (/^مهمل$/i.test(m.text) ) {
       let av = 'https://telegra.ph/file/60fd490cdbddc61ffbf43.jpg'
       this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
       return true; // Return true to indicate message is handled
    }


    if (/^اسطوري$/i.test(m.text) ) {
        let av = 'https://telegra.ph/file/afa487da67d87a2faf9dc.jpg'
        this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
        return true; // Return true to indicate message is handled
    }

    return false; // Return false if message is not handled
}

export default handler;
