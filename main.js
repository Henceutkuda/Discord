const Discord = require('discord.js-selfbot-v13')
const client = new Discord.Client()
const { get } = require('node-superfetch')
const express = require("express")
const fs = require("fs")
const app = express()
const discordrpc = require("discord-rpc")
const clientid = "1001720949999149096"
const { RichPresence, Util } = require('discord.js-selfbot-rpc');
const startTimestamp = new Date()
app.get("/", (req, res) => {
res.sendStatus(200);
});

app.listen(process.env.PORT || 3000)
client.on("ready", async () => {
   const presence = new RichPresence()
        .setStatus('idle') 
        .setType('PLAYING')  
        .setApplicationId(clientid)
        .setName('FiveM')
        .setDetails('In a menus')
        .setAssetsLargeImage(fivem.id)
        .setAssetsSmallImage(fivem.id)
        .setTimestamp();
    client.user.setPresence(presence.toData())
    console.log('Rich Presence has running...');
  console.log('Online ' + client.user.tag)
})


const axios = require("axios")
const urls = ["https://glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);



client.login(process.env.TOKEN)