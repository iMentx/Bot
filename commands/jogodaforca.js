const { hangman } = require('reconlx')

module.exports = {
    name : 'hangman',
    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You need manage messages permission.')
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Por favor específique um canal')
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send('Por favor específiqque uma palavra.')

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();
    }
}