let options = ["Yes", "Absolutely", "Most Likely", "Probably", "Sure", "That question eludes me", "I'm thinking - ask again", "No", "Not at all", "Nope", "Not really", "Probably not"]

module.exports = {
	"Name": "8ball",
	"Description": "Will answer all of your life questions",
	async execute(interaction) {
    // add suicide protection and ensure an argument is given
		return interaction.reply(options[Math.floor(Math.random() * options.length)])
	},
};