'use strict';
const DiscordBots = require("./lib/DiscordBots");

function dbjs(clientToken) {
    return new DiscordBots(clientToken)
}

dbjs.DiscordBots = DiscordBots;

module.exports = dbjs;