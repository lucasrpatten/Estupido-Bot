let options = ["Yes", "Absolutely", "Most Likely", "Probably", "Sure", "That question eludes me", "I'm thinking - ask again", "No", "Not at all", "Nope", "Not really", "Probably not"]
let suicideKeywords = ["kill myself", "suicide", "end my life"]
function determineSuicide(question) {
	for (item in suicideKeywords) {
		if (question.toLowerCase().includes(suicideKeywords[item])) {
			return true
		}
	}
	return false
}

module.exports = {
	"Name": "8ball",
	"Description": "Will answer all of your life questions",
	async execute(message) {
    // add suicide protection and ensure an argument is given
		let content = message.content;
		let cmdArray = content.split(' ');
		let question = cmdArray;
		question.shift()
	  question = question.join(" ");

		if (question.length == 0) {
			return message.reply("Bruh... I'm an 8ball not a mind reader. What do you need answered...")
		}
		else if (determineSuicide(question) == true) {
			return message.reply("You matter! There is help. Suicide Hotline: `988` (in US), `1-800-273-TALK` (Elsewhere)")
		}
		else {
			return message.reply(options[Math.floor(Math.random() * options.length)])
		}
	},
};