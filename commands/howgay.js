function calcGay() {
  return Math.floor(Math.random() * 101) + "% gay :rainbow_flag:"
}

module.exports = {
	"Name": "howgay",
	"Description": "How homo are you?",
	async execute(message) {
    cmdArray = message.content.split(" ")
    user = cmdArray[1]
    if (user == undefined) {
      return message.reply("You are " + calcGay());
    }
    else {
      delete cmdArray[0]
      statement = cmdArray.join(' ');
      return message.channel.send(statement + " is " + calcGay())
    }
	},
};