import { config } from './config';
import { Client, EmbedBuilder, TextChannel } from "discord.js";

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

// const sendIntroMessage = async () => {
//     const channel = client.channels.cache.get('1283122238626861097') as TextChannel;
//     channel?.send({
//         embeds: [
//             new EmbedBuilder()
//             .setThumbnail('https://wow.zamimg.com/uploads/screenshots/normal/151933-summon-felguard.jpg')
//             .setColor('#000000')
//             .setAuthor({ name: 'Krimtom' })
//             .setTitle('Krimtom\'s Introduction')
//             .setDescription('Master says I will be responsible for auto-scheduling your raids for Sundays and Tuesdays.  If you have any questions about my existence, please direct them to my master, Hubriz.  Goodbye...')
//             .setImage('https://mmo-gs.com/wp-content/uploads/2019/06/warlock1.jpg')
//         ],
//     });
// }

client.login(config.DISCORD_TOKEN);

client.on('ready', async () => {
    // await sendIntroMessage();
});