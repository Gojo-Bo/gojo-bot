let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^كت$/i.test(m.text)) { 
 responses = [ 
 `*∞──────「كـت」──────∞*

*~『نانو』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『زياد』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『شيمي』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『نعجه』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『ضرار』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『محمد ضرار』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『لاكوست』~*

*∞──────「كـت」──────∞*`

 ];
 }  
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
