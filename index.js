require("dotenv").config();


const Bot = require("./src/struct/Bot");

require('http').createServer((req, res) => res.end(`
 |-----------------------------------------|
 |              Informations               |
 |-----------------------------------------|
 |• Alive: 24/7                            |
 |-----------------------------------------|
 |• Author: フェランズ#3249                   |
 |-----------------------------------------|
 |• Server: https://discord.gg/p3UfFaRhUN  |
 |-----------------------------------------|
 |• Github: https://github.com/diwasatreya |
 |-----------------------------------------|
 |• License: Apache License 2.0            |
 |-----------------------------------------|
`)).listen(3000)

const client = new Bot();


(async () => await client.start(process.env.TOKEN))();
