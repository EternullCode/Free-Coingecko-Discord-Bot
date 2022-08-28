# Eternull's free Coingecko Discord bot v0.1.

🚨 WE ARE AWARE THIS SCRIPT IS UNOPTIMIZED! 🚨  
We have approached it like a begginner would so that it's easier to digest and create a deeper understanding. 

It's designed for those of you that are interested in learning programming and think it would be cool to host your own bot 🙏. 

The bot pulls data from Coingecko's API and pushes the results to the bots nickname. 

### Checklist before starting
1. [Install Node](https://nodejs.org/en/download/)  
2. [Install Visual Studio Code](https://code.visualstudio.com/) / Other code editor.
3. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. Fork the Repo. If you don't know how [Click on this](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository)

### Creating a Discord application
[Follow these steps on our Notion](https://discord.com/developers/applications)  


### Getting the bot running in your code editor
1. Open your code editor.
2. Open the terminal. In VSC the standard keybind is `` `CTRL + ` ``. Alternatively you can click on `Terminal -> New Terminal` up top.
3. Clone the forked repo in your code editor. To do this follow [this guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository).
4. Once you see the repo files in your code editor, type `npm install` and hit enter. This will load the necessary dependencies.
4. Put your Discord bot token ID in the .env file. It should look something like this when complete: `DISCORD_TOKEN_ID=myKeyGoesHere`

Check the exampleFiles folder and use the config.json as a template for your own config.json in the root folder. Otherwise you can fill that in and replace the config.json in the root folder.
In your console type  run index.js to install the necessary dependencies from package.json.