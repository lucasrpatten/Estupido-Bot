fs = require('fs')

function msToTime(duration) {
    let seconds = Math.floor(duration / 1000),
    minutes = Math.floor(seconds / 60),
    hours = Math.floor(minutes / 60);

    seconds = seconds % 60
    minutes = minutes % 60

  return hours + " hours " + minutes + " minutes " + seconds + " seconds";
}

module.exports = {
	"Name": "uptime",
	"Description": 'Uptime of bot',
	async execute(message) {
    date = new Date()
    onlineSince = JSON.parse(fs.readFileSync('botstats.json', 'utf8', (error) => {
      if (error) throw error;
    }))["onlineSince"]
		return message.channel.send(`The bot has been online for ${msToTime(date.getTime() - onlineSince)}`)
	},
};