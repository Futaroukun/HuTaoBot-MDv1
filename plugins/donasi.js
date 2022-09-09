let fetch = require('node-fetch')
let teks = 'Donasi'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/c6d47e0aa9dca2263bee9.png'+ teks)).buffer(), `

*𝐇𝐚𝐥𝐨 𝐁𝐚𝐧𝐡 𝐃𝐨𝐧𝐚𝐬𝐢 𝐲𝐮𝐤 𝐁𝐢𝐚𝐫 𝐁𝐨𝐭 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐥𝐚𝐥𝐮👋*
╔═══════════════════
║ _*DONASI UNTUK*_  A7 RAFLI 
╠═══════════════════
║        ❉ 〔 *Hu Tao Bot* 〕 ❉
║➸ *DANA* : 
║➸ 085722157719
║➸ *PULSA
║➸ 083854551575
║➸ *Saweria*:
║ https://saweria.co/Raflieditz2
╰═══════════════════
╔════════════════════
║ *Donasi Via Ikuti Sosial media*
╠════════════════════
║     ❉ 〔 *Hu Tao Bot-MD 〕 ❉
║➸ *Tiktok*
║ https://vt.tiktok.com/ZSeABMWuN
║➸ *Youtube*
║ https://tinyurl.com/2qsejxnw
║➸ *Github*
║ https://github.com/Futaroukun
╚════════════════════

`.trim(), wm, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
