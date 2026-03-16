/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['51946057534'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂™'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂™',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUTZOiSBD9L3XVGEEBgYiOGEAEP7AVVNSNOZRQYAkUWAUoTvjfN7C7p+ewO9t7K7KKzJfvvcyfgOSYoRlqgPoTFBTXsETtsWwKBFSgV1GEKOiCEJYQqABPT2c/ZNqILROfxgefjc3NTNZGle2fNuaod/WW+HpeSf3NC3h0QVEdUxz8IeFwYlyyy1Ebwb1097h6M+PHr3WdbXMJic5kK8tlYG22vr2+voBHmxFiiklsFieUIQrTGWqWENOvwc8XPX+U5Gl/oe+bpnPg1j3T3xM2JtWOy07FPbqanjurXU74GvwFx+73up6db7KwVDx6Pg/TXSwGMB/F8Dgv0Kxyw0t+xV7yBp/hmKBwEiJS4rL5Mu+O07/pN+IMD7g5sanpKKeAKdueO/esW6+fQWWlK3nl28kXea9iH2+KlXK8Hehi5epSFVl3frvbumP9dWrLy9q53pQLuemb34Ev6YdXkv/D+6vRTJOh5QqHemjslHQgHkkmpKWp25JHOvC6uZO5HgrJV+FnJ18r5t65I/qro6MkrrHWBswe840Ge4Qng8ky9SaLpD9in/BhWdE/oZzqSdopqn6TrYcubxdmveYOszEN++fTTpvuqqVVzSVdzwZBLCvHsU7zsjxbS7HRt3jTSWRjzjr1a98xAouYi3BQ8WKsvTw7SlAzCYHKP7qAohizksIS56SNDbgugGHtoYCi8skuKKvOqDA0F3YcpJDb687K3ZXVdxR/LFNtLlnE2CbSoh95zgvogoLmAWIMhTZmZU4bBzEGY8SA+tePLiDoVr7p9qzGd0GEKSs3pCrSHIYfon5cwiDIK1J6DQmM9oAoULnPMCpLTGLW0lgRSIMTrpFxgiUDagRThn41iCgKgVrSCv0aWiMPW95X/ZWlmY4MuiB76oFDoAKRVwSJE4fiQFD57+zbtU0Ki+IbQSXoAgLbt8BrGMvTquWOgS5In7/2JUEaiPyAF3hJ5vsq/72NP36BbmuEqIQ4ZUAFxgzJt8gZmZPXs8A4y9LMWDNiDXw2+WGWNzUGfHLUq975kr8WdlOhjXmpcaPMGQquB9O8nQ6ysojorm7kl39IAlTQnNMJ613r+0YvPNSk5i6A3HS5Hbn24SY63KleENRp9j7uddLhxZnMYTwrDX5LufqYyPeNXawGjdicTfew8w66LHqSFr+01UJU4wD9XszaTRerdc1izYl90WwGe8zu03y+3iazGz7WQjTZ3h0BYatT2tl56U/yuLOd7ontVpdUgv48am55OmPxqE5rGFq8tMfvNn6OUfq+vvDTYa187WeE0XMbvAv1H3K+wW49xz26v2V43y7/MqF6qBys67EWpMvo4sqUpPqMCqz2hjZxLFd39n60XO8kfijX4PH40QVFCssopxlQAcuOEHQBzavWwRMS5X+oZGjcxIzjSdt0ClmpfU7FGmeIlTArgMoPh4MhNxDF4durJc0LG7ITUAE/E062AB5/A6EYR75iBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/makubexGB/KnightBot-Mini', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂™',
    
    // Bot Behavior
    selfMode: true, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: true,
    autoBio: true,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: true,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: true,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: true,
      antitagAction: 'delete',
      antiall: true, // Owner only - blocks all messages from non-admins
      antiviewonce: true,
      antibot: true,
      anticall: true, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: true,
      antidelete: true,
      nsfw: false,
      detect: false,
      chatbot: true,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'America/Lima',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/makubexGB',
      instagram: 'https://instagram.com/',
      youtube: 'syssolutionsperu'
    }
};
  
