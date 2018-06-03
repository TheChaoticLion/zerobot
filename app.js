const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = 'NDUxOTA5MjU0NDYzNDg4MDAx.DfQgfw.CPdL8T8wvMbalXIuZCE0J4RiAWA';
const PREFIX = '!';
bot.on('ready', () => {
    console.log('Ready')

bot.user.setStatus('Online')

bot.user.setGame('with My Darling~<3 ')

bot.user.setGame('with My Darling~ <3', 'https://www.twitch.tv/thechaoticlion');

});

bot.on('message', function(message) {

    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "info":
            message.channel.sendMessage('Best Darling In The Franxx bot by TheChaoticLion');
            break;
        case "ping":
            message.channel.sendMessage("Pong!")
            break;
        //to be determined on what to do with this
        // https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=image
        case "embed":
            var embed = new Discord.RichEmbed()
                .setDescription(" ")
            message.channel.sendEmbed(embed);
            break;
        case "play":
            message.channel.sendMessage('Darling I got chu');
            break;
        case "Zero Two":
            message.channel.sendMessage("Darling!")
            break;
        case "rundown":
            message.channel.sendMessage("you know what it means bro? you know what it means?")
            break;
        case "summon":
            message.channel.sendMessage("comming!")
            break;
        default:
            message.channel.sendMessage("Invalid command");
    }
});

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'Zero Two') {
        message.channel.sendMessage('Darling!');
    }
});
bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'lemmie give you the rundown of finna nut') {
        message.channel.sendMessage('you know what it means bro? you know what it means?');
    }
});


bot.login(TOKEN);
