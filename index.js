const { CommandoClient } = require("discord.js-commando");
const path = require("path");

const client = new CommandoClient ({
    commandPrefix: "-",
    owner: "494470475011850240",
    invite: "https://discord.gg/T2jkMZem56"
});

client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerGroup("music", "Music")
    .registerCommandsIn(path.join(__dirname, "commands"));

client.once("ready", () => {
    console.log(`Connecter en tant que ${client.user.tag} -  (${client.user.id})`);
});

client.on("error", (error) => console.error(error));

client.login("ODg4MTIyNzAwNTEyNTA1ODk3.YUOGuA.R2udTVdzEDq2-PyTpmErAyPTEnA");