const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "k!";

client.login("NDI0ODg0Njc4NTc1NzgzOTU2.Da-htw.hWjoNwqfq6bs7Suav2vj_Y4gCNs")

client.on("ready", () => {
    console.log("je suis pret et fonctionnel")
    client.user.setGame("je sais pas");
});

client.on('message', message => {
    if(message.content === "Bonjour" ) { 
        message.reply("yo :wink:")
        console.log('yo');
    }

    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("LES COMMANDE D'AIDE")
        .setDescription("voici mes commandes d'aide k/help pour la commande")
        .addField("k!aide", "affiche les commandes")
        .addField("bonjour / Bonjour", "le bot vous répond dans les deux cas")
        .addField("k!ping", "le bot te répond pong")
        .addField("k!logo", "Le bot met ton logo")
        .setFooter("bot par kylian coppririghté")
        message.channel.sendMessage(help_embed)
        console.log("un utilisateur a fais un k!aide")
        }
    });

client.on('message', message => {
    if(message.content === "bonjour" ) { 
        message.reply("yo :wink:")
        console.log('yo');
    }
});

client.on('message', message => {
    if (message.content === 'mon logo') {
      message.reply(message.author.avatarURL);
    }
  });

  client.on('message', message => {
    if(message.content === prefix + "ping" ) { 
        message.reply("pong :+1:")
        console.log("ping pong");
    }
});

client.on('message', message => {
    if (message.content === prefix + "logo" ) {
        message.reply(message.author.avatarURL);
    }
});

client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content === prefix + 'join') {
  
      if (message.member.voiceChannel) {
  
        message.member.voiceChannel.join()
          .then(connection => { 
            message.reply('I have successfully connected to the channel!');
          })
          .catch(console.log);
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
  });
  