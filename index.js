const Discord = require('discord.js');
const Config = require('./config.js');
const request = require('request');

// Creating the discord client
const client = new Discord.Client();

// Attaching the config to the client
client.config = Config;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}\n${client.guilds.size} servers!`);

  let channel = client.channels.get(Config.Newsroom);

  setInterval(function() {
    request('https://api.coinpaprika.com/v1/tickers/cds-crypto-development-services/', function(error, response, body) {
      if (!error && response.statusCode == 200) {
        let info = JSON.parse(body);
        channel.send(`${body}` + `\n**Powered by CoinPaprika API**\n\n**__Please note this is in json format__**`);
      }
    });
  }, Config.msgdelay);
  // setInterval(function() {
  //   request('https://api.coinmarketcap.com/v2/ticker/1/?convert=ETH', function(error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //       let info = JSON.parse(body);
  //       channel.send(`**Bitcoin Price:** **BTC/USD$** ${info.data.quotes.USD.price} **BTC/ETH** ${info.data.quotes.ETH.price}`);
  //     }
  //   });
  // }, Config.msgdelay);
  // setInterval(function() {
  //   request('https://api.coinmarketcap.com/v2/ticker/328/?convert=BTC', function(error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //       let info = JSON.parse(body);
  //       channel.send(`**Monero Price:** **XMR/USD$** ${info.data.quotes.USD.price} **XMR/BTC** ${info.data.quotes.BTC.price}`);
  //     }
  //   });
  // }, Config.msgdelay);
  // setInterval(function() {
  //   request('https://api.coinmarketcap.com/v2/ticker/74/?convert=BTC', function(error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //       let info = JSON.parse(body);
  //       channel.send(`**Dogecoin Price:** **DOGE/USD$** ${info.data.quotes.USD.price} **DOGE/BTC** ${info.data.quotes.BTC.price}`);
  //     }
  //   });
  // }, Config.msgdelay);

  // Creating the tables for the database
});

// Logging in to the client with the token
client.login(Config.Token);
