// Read about 'use-strict' here: https://www.w3schools.com/js/js_strict.asp
"use strict"

// Import and configure dotenv so we can store our Discord 'Token ID' as an environmental variable: https://www.npmjs.com/package/dotenv
// A Discord Token ID is obtained from Discords Dev Portal: https://discord.com/developers/applications
require('dotenv').config();

// Import the node-fetch library. We're using this later to fetch data from CoinGecko's API.
const fetch = require('node-fetch');

// Import Client & Intents from the Discord.js library.
// We need these to initialise the bot and retrieve the correct information from guilds.
const { Client, Intents } = require('discord.js');

// Declaring the bot as 'bot' and assigning the correct intents.
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Importing the values from the 'config.json' file.
const { coingeckoId, ticker, customStatus, updateInterval } = require('./config.json');

// Declaring the main function.
function getCoingecko() {

  // Declaring the guildMeCache array. We're using this to store all guilds the bot is a
  // member of. Read about arrays here: https://www.w3schools.com/js/js_arrays.asp
  let guildMeCache = [];

  // Check if user has filled in .env & config.json files. Won't run otherwise.
  if (process.env.DISCORD_TOKEN_ID != "" && coingeckoId != "") {

    // Ready up activities. Pushing all current guilds the bot is in to the guildMeCache Array.
    bot.on("ready", () => {
      bot.guilds.cache.each((guild) => guildMeCache.push(guild));

      // Login activity. Example: 'Logged in as fluffycow#1234'. 
      console.log(`Logged in as ${bot.user.tag}!`);

      // Check for custom status. Default to 'Watching Discord.gg/Eternull if empty'
      if (customStatus != "") {
        bot.user.setActivity(customStatus, { type: "WATCHING" });
      } else {
        bot.user.setActivity(`Discord.gg/Eternull`, { type: "WATCHING" }); // It's free real-estate.
      }

      // Check for custom update interval. Else set it to 60s. This is to avoid IP bans from Discord.
      // They're usually 30mins so don't worry if it happens.
      if (updateInterval === "" || updateInterval < 60000) {
        updateInterval = 60000;
        console.log("updateInterval(config.json) missing or less than 60000! Setting to 60000 to avoid Discord API rate-limits.");
      }

      // Run the asynchronous fetchCoingeckoData function.
      // Read more about asynchronous functions here: https://www.w3schools.com/js/js_async.asp
      fetchCoingeckoData()

      // This will run the fetchCoingeckoData function every 60+ seconds and retrieve new price data.
      setInterval(fetchCoingeckoData, updateInterval);
    })
  } else {
    console.log("TIP: DISCORD_TOKEN_ID(.env file) or coingeckoId(config.json file) missing.");
  }

  async function fetchCoingeckoData(price) {

    try {

      // Fetch data from the CG v3 API and parses the response to JSON.
      // Read about Response.json() here: https://developer.mozilla.org/en-US/docs/Web/API/Response/json
      const coingeckoData = await fetch(`https://api.coingecko.com/api/v3/coins/${coingeckoId}`)
        .then(response => response.json());

        //Pull in the price as USD & saves it to the variable 'price'.
        price = coingeckoData.market_data.current_price.usd;
      } catch (error) {
        console.log("TIP: No data is being pulled in for the coingeckoId provided. Check config.json for errors.")

        // Remove '//'below if you want to see the REAL errors.
        // console.log(error)
      }

      // Check to see if the data has returned a value. Run the setBot function and pass through the price.
      if (!isNaN(price) && price != null) {
        setBot(price)
      }

  }

  function setBot(price) {
    for (let i = 0; i < guildMeCache.length; i++) {

      // Check if ticker(config.json) has a value. Otherwise run the else statement.
      if (ticker != "") {
        guildMeCache[i].me.setNickname(`${ticker}$${price.toLocaleString("en-US")}`);
      } else {
        guildMeCache[i].me.setNickname(`$${price.toLocaleString("en-US")}`);
      }
    }
  }

  // Log the bot in with the DISCORD_TOKEN_ID provided from the .env file
  bot.login(process.env.DISCORD_TOKEN_ID);
}

// Running the main function
getCoingecko();