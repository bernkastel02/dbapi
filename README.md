# dbapi
#### A wrapper made for the Discord Bots API

## Example
```
var dbapi = require("./discordbots.js/index.js");

var db = new dbapi("Token")

db.getStats("140707547634991104").then((botData) => { console.log(botData) })
```

## NPM Package
https://www.npmjs.com/package/discord-bots-api

## Documentation

**.bots**

```js
db.bots.then((botData) => { console.log(botData) })
```
Returns all the data added to the API.

<hr>

**.getInfo(botID)**

```js
db.getInfo(botID).then((botData) => { console.log(botData) })
```
Returns information about a bot on the API.

<hr>
    
**.getStats(botID)**

```js
db.getStats(botID).then((botData) => { console.log(botData) })
```
Returns stats about a bot on the API, returns `undefined` if a server count isnt `POST`'d to the API.

<hr>

**.getUser(userID)**

```js
db.getUser("133483105645232129").then((userData) => { console.log(userData) })
```
Returns the bots a user owns.

<hr>

**.postStats(botID, server_count)**

```js
db.postStats(botID, 1).then((botData) => { console.log(botData) })
````
Returns undefined. Bot stats were posted.

<hr>

**.postStatsShard(botID, shardID, shard_count, server_count)**

```js
db.postStatsShard(botID, 1, 1, 1).then((botData) => { console.log(botData) })
````
Returns undefined. Bot stats were posted via shard.

#### How do i get a token? 

From [here](https://bots.discord.pw/api)