module.exports = {
	"Name": "ping",
	"Description": 'Replies with Pong!',
	async execute(message) {
		return message.reply('Pong!');
	},
};