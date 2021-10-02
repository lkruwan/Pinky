
const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const config = require('../config');
const LOAD_ING = "*Searching your film and link*"

const Language = require('../language');
const Lang = Language.getString('weather');

if (config.WORKTYPE == 'private') {


Julie.addCommand({pattern: 'gtfilm ?(.*)', fromMe: true, desc: Lang.HMOD , dontAddCommandList: false }, async (message, match) => {
	const {data} = await axios(`https://api.zeks.me/api/film/2?apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs&q=${match[1]}`)
	const result = data.result[0]
	const status = data
	if(!status) return await message.sendMessage('not found')
	await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text);
	let msg = '```\n'
	msg += '📘 FILM NAME   : ' + result.title + '\n\n'
		msg += '📥 LINK   : ' + result.url + '\n\n'
	msg+= '```'
	return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
	});
}

if (config.WORKTYPE == 'public') {


Julie.addCommand({pattern: 'gtfilm ?(.*)', fromMe: false, desc: Lang.HMOD , dontAddCommandList: false }, async (message, match) => {
	const {data} = await axios(`https://api.zeks.me/api/film/2?apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs&q=${match[1]}`)
	const result = data.result[0]
	const status = data
	if(!status) return await message.sendMessage('not found')
	await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text);
	let msg = '```\n'
	msg += '📘 FILM NAME   : ' + result.title + '\n\n'
		msg += '📥 LINK   : ' + result.url + '\n\n'
	msg+= '```'
	return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
	});
}
