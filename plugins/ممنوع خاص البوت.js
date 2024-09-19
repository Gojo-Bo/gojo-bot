//to use this grouponly mustbe off(using a sigle prefix is preferred)
export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
    // Ignore messages sent by the bot itself
    if (m.isBaileys && m.fromMe) return true;

    // Allow the owner's messages 
    if (isOwner) return false;

    // Ignore messages sent in group chats
    if (m.isGroup) return false;

     const allowlist = global.allowed || [];
    if (allowlist.includes(m.sender.split('@')[0])) return false;

    // If the message is not sent in a group, it's a private message 
    if (!m.isGroup) {
      // Fetch chat data and bot settings
      let chat = global.db.data.chats[m.chat];
      let bot = global.db.data.settings[this.user.jid] || {};

      // Check if the "PM Blocker" feature is enabled, and the sender is not an owner or real owner
      if (bot.pmblocker && !isOwner && !isROwner) {
        // Block the sender unconditionally for any private message sent
        await m.reply(`*[❗] مرحبًا @${m.sender.split`@`[0]}، يُمنع التحدث في الخاص مع البوت لهذا السبب سيتم حظرك.*\n\n*اذا كنت تريد تجربه البوت ادخل جروب البوت『 https://chat.whatsapp.com/LVUtrbnAQOf1KjaKDZNYWf 』*\n\n*اذا كنت تريد ان تكلم مطور البوت هذا رقمي 『‏‪『+201501991015*`, false, { mentions: [m.sender] });
        await this.updateBlockStatus(m.chat, 'block');

        // Return true to indicate that the private message should be blocked
        return true;
      }
    }


    return true;
  }
