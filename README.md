# Eternull's Free Coingecko Discord bot
For support & 1400+ free bots you can join our [Discord](https://discord.gg/UyK2mfxgcB).  

🚨 WE ARE AWARE THIS SCRIPT IS NOT OPTIMIZED! 🚨 THIS IS A WIP!  

We approached this like a beginner would so that it's easier to digest and create a deeper understanding.  
It's designed for those of you that are interested in learning programming and think it would be cool to host your own bot. 

### How does it work?  
The bot pulls data from [Coingecko's API](https://www.coingecko.com/en/api) and pushes the results to the bots nickname. The bot updates every 60s which can be changed in the `config.json`.

### Checklist before starting
1. [Install Node & Npm](https://nodejs.org/en/download/)  
2. [Install Visual Studio Code](https://code.visualstudio.com/) / Other code editor.
3. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. [Fork the Repo](https://github.com/EternullCode/Free-Coingecko-Discord-Bot/fork)

### Creating a Discord application
[Follow these steps on our Notion](https://eternull.notion.site/Eternull-s-Free-Coingecko-Bot-Setup-dd9ef5765a1845e4959152033c2299d1)


### Running the bot
1. Open your code editor
2. Open the terminal. In VSC the standard keybind is `` CTRL + ` ``. Alternatively you can click on `Terminal -> New Terminal` in the toolbar
3. Clone the forked repo in your code editor. To do this follow [this](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) guide
4. Once you see the repo files in your code editor, type `npm install` and hit enter. This will load the necessary dependencies
5. Put your bot token ID in the `.env` file and press `CTRL + S` to save. It should look something like this when complete: `DISCORD_TOKEN_ID=myKeyGoesHere`
6. Check `config.json` and enter the desired `coingeckoId`. Examples: `ethereum`, `bitcoin`, `usd-coin`
7. Type `node index.js` in your terminal and hit enter. Your bot should now come online! 🎉

### Where to find the Coingecko API ID?
1. Go to the [Coingecko](https://www.coingecko.com/) website  
2. Choose a coin. We'll use Bitcoin (BTC) as an example
3. The `API id` can be found on the info section. This is what you're pasting into the `config.json`
![](https://eternull.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4b7f1af2-dfc7-4b5f-a15e-eb6cabeeb631%2FcoingeckoApi.png?table=block&id=9e887a4b-4ae8-4515-93e9-0d4cc406a4a2&spaceId=392aea56-6ad3-4992-9120-0deee1ce1741&width=2000&userId=&cache=v2)

### Issues?
Join our [Discord](https://discord.gg/UyK2mfxgcB) for assistance.