'use strict';
var rp = require("request-promise-any")
var url = ("https://bots.discord.pw/api/")

class DiscordBots {
    constructor(clientToken) {
        this.token = clientToken;
    }
    
    get bots() {
        let options = {
            method: 'GET',
            uri: `${url}bots`,
            headers: {
                'Authorization': this.token
            }
        };
        return rp(options).then((Output) => { 
            Promise.resolve("Success!")
            return JSON.parse(Output);
        }).catch((err) => {
            Promise.reject(err);
        })
    }
    
    getUser(userID) {
        let options = {
            method: 'GET',
            uri: `${url}users/${userID}`,
            headers: {
                'Authorization': this.token
            }
        };
        return rp(options).then((Output) => { 
            Promise.resolve("Success!")
            return JSON.parse(Output);
        }).catch((err) => {
            Promise.reject(err);
        })
    }
    
    getInfo(botID) {
        let options = {
            method: 'GET',
            uri: `${url}bots/${botID}`,
            headers: {
                'Authorization': this.token
            }
        };
        return rp(options).then((Output) => { 
            Promise.resolve("Success!")
            return JSON.parse(Output);
        }).catch((err) => {
            Promise.reject(err);
        })
    }
    
    getStats(botID) {
        let options = {
            method: 'GET',
            uri: `${url}bots/${botID}/stats`,
            headers: {
                'Authorization': this.token
            }
        };
        return rp(options).then((Output) => { 
            if (Output === undefined) {
                return "Could not find any stats for this bot!";
            } else {
                Promise.resolve("Success!")
                return JSON.parse(Output)
            }
        }).catch((err) => {
            Promise.reject(err);
        })
    }
    
    postStats(botID, sc) {
        let options = {
            method: 'POST',
            uri: `${url}bots/${botID}/stats`,
            body: {
                "server_count": sc  
            },
            headers: {
                'Authorization': this.token
            },
            json: true
        };
        return rp(options).then((Output) => { 
            if (Output === undefined) {
                return "Could not find any stats for this bot!";
            } else {
                Promise.resolve("Success!")
                return JSON.parse(Output)
            }
        }).catch((err) => {
            Promise.reject(err);
        })
    }
    
    postStatsShard(botID, shardID, shardCount, sc) {
        let options = {
            method: 'POST',
            uri: `${url}bots/${botID}/stats`,
            body: {
                "shard_id": shardID,
                "shard_count": shardCount,
                "server_count": sc  
            },
            headers: {
                'Authorization': this.token
            },
            json: true
        };
        return rp(options).then((Output) => { 
            if (Output === undefined) {
                return "Could not find any stats for this bot!";
            } else {
                Promise.resolve("Success!")
                return JSON.parse(Output)
            }
        }).catch((err) => {
            Promise.reject(err);
        })
    }
}

module.exports = DiscordBots;