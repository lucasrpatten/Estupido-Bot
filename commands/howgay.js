module.exports = {
	"Name": "howgay",
	"Description": "How homo are you?",
	async execute(interaction) {
    user = interaction.content.split(" ")[1]
    if (user == undefined) {
      return interaction.reply("You are " + Math.floor(Math.random() * 101) + "% gay :rainbow_flag:");
    }
    // add verification to ensure user is mentioned - or add support for anything
    else {
      return interaction.channel.send(user + "is " + Math.floor(Math.random() * 101) + "% gay :rainbow_flag:");
    }
	},
};