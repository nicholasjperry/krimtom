import { config } from './config';
import {
    Client,
    EmbedBuilder,
    Events,
    TextChannel
} from "discord.js";

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

// const sendIntroMessage = async () => {
    // const channel = client.channels.cache.get('1283122238626861097') as TextChannel;
    // channel?.send({
        // embeds: [
        //     new EmbedBuilder()
        //     .setThumbnail('https://wow.zamimg.com/uploads/screenshots/normal/151933-summon-felguard.jpg')
        //     .setColor('#000000')
        //     .setAuthor({ name: 'Krimtom' })
        //     .setTitle('Krimtom\'s Introduction')
        //     .setDescription('Master says I will be responsible for auto-scheduling your raids for Sundays and Tuesdays.  If you have any questions about my existence, please direct them to my master, Hubriz.  Goodbye...')
        //     .setImage('https://mmo-gs.com/wp-content/uploads/2019/06/warlock1.jpg')
        // ],
    // });
// }

// Server Id for <Inept>: 230431351172497418

const apiKey = config.API_KEY;

const serverEvents = fetch('https://raid-helper.dev/api/v3/servers/230431351172497418/events', {
    method: 'GET',
    headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
    },
})
.then(response => response.json())
.then(data => {
    console.log(data.postedEvents[0]);
    return JSON.stringify(data.postedEvents[0], null, 2);
});

const sendServerEventMessage = async() => {
    // Channel Id for #general: 230431351172497418
    const channel = client.channels.cache.get('230431351172497418') as TextChannel;
    channel?.send(await serverEvents);
}

client.login(config.DISCORD_TOKEN);

client.on('ready', async (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    // await serverEvents;
    await sendServerEventMessage();
});