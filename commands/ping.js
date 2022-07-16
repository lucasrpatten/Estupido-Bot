module.exports = {
	"Name": "ping",
	"Description": 'Replies with Pong!',
	async execute(interaction) {
		return interaction.reply('Pong!');
	},
};