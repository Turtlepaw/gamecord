const Discord = require("discord.js");
const djsh = require("discordjsh");
const {
    token,
    clientId
} = require("./config.json");

const ClientBuild = new djsh.Client({
    testGuildID: `842575277249921074`,
    clientID: clientId,
    token: token
})
.setCommandsDir();

const client = ClientBuild.create({
    intents: [
        "GUILDS"
    ],
    partials: [
        "USER"
    ]
});
