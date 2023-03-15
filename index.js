const tmi = require('tmi.js')

const BotName = ""
const Token = "oauth:"

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: BotName,
		password: Token
	},
	connection: {cluster: '1', timeout: 2000, reconnect: true},
	channels: [ '' ]
})
client.connect()

client.on('message', (channel, tags, message, self) => {
    if(self) return;

    if(message.toLowerCase() === '!hi') {
		client.say(channel,`@${tags.username}, ดีค้าบบบบ ทุกคน!`);
	}
});