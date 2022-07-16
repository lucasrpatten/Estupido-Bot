//{{{ Imports and Declarations
require('dotenv').config()
const discord = require('discord.js')
const config = require('./config.json')
const { Collection, Intents } = require('discord.js');
const fs = require('fs');
const path = require('path');
const client = new discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_BANS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_INTEGRATIONS",
    "GUILD_WEBHOOKS",
    "GUILD_INVITES",
    "GUILD_VOICE_STATES",
    "GUILD_PRESENCES",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_TYPING"
  ],
});
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const prefix = config.prefix;
//}}}

let prefixCommands = []
let prefixCommandNameList = []

for (const file of commandFiles) {
  commandObject = {}
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
  prefixCommands.push(command);
  prefixCommandNameList.push(command.Name)
}

client.on("message", message => {
  // ignore all messages from bots
  if (message.author.bot) {
    return
  }
  let cmdWithPrefix = message.content.split(' ')[0];
  let cmd = cmdWithPrefix.slice(1);
  if (cmdWithPrefix.startsWith(prefix) && prefixCommandNameList.includes(cmd)) {
    Object.values(prefixCommands)[prefixCommandNameList.indexOf(cmd)].execute(message)
  }
  return

})

client.on("ready", () => {
  console.log("Online")
})

client.login(process.env.BOT_TOKEN)