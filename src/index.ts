import { config } from './config';
import {
    Client,
    EmbedBuilder,
    Events,
    TextChannel
} from "discord.js";
import cron from 'node-cron';

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

// Server Id for <Inept>: 230431351172497418

const apiKey = config.API_KEY;

// #region Create Event

// const createEvent = fetch('https://raid-helper.dev/api/v2/servers/230431351172497418/channels/1283125741944570021/event', {
//     method: 'POST',
//     headers: {
//         'Authorization': `${apiKey}`,
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         leaderId: '346389429805383682',
//         templateId: 5,
//         title: 'Krimtom Make Test Event Title',
//         description: 'Krimtom make test description.',
//         advancedSettings: {
//             image:  'https://preview.redd.it/unit-idea-felguard-v0-ypbjntiihmjd1.jpeg?width=640&crop=smart&auto=webp&s=11587e9d60f258bbafd2f99d3092b33a7fa8a48d',
//         },
//     })
    
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     return data;
// });

// #endregion

// #region GET Server Event Data

// const serverEvents = fetch('https://raid-helper.dev/api/v3/servers/230431351172497418/events', {
//     method: 'GET',
//     headers: {
//         'Authorization': `${apiKey}`,
//         'Content-Type': 'application/json'
//     },
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data.postedEvents[0]);
//     return JSON.stringify(data.postedEvents[0], null, 2);
// });

// const sendServerEventMessage = async() => {
//     // Channel Id for #general: 230431351172497418
//     const channel = client.channels.cache.get('230431351172497418') as TextChannel;
//     channel?.send(await serverEvents);
// }

// #endregion

// #region Krimtom's Intro Message

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

// #endregion

client.login(config.BOT_TOKEN);

client.on('ready', async (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    // await createEvent;
    cron.schedule('* * * * *', async () => {
        const now = new Date();

        // Schedule Sunday raid event
        if (now.getDay() === 4) {
            // Create event for Sunday
        }

        // Schedule Tuesday raid event
        if (now.getDay() === 1) {
            // Create event for Tuesday
        } 
        if (now.getDay() === 5) console.log("It's Friday!")
    }, {
        timezone: 'America/New_York'
    }); 
    // cron.schedule('0 0 * * 1,3', async () => {
    //     // Schedule Sunday raid event
    //     if (now.getDay() === 4) {
    //         // Sunday timestamp
    //     }

    //     // Schedule Tuesday raid event
    //     if (now.getDay() === 1) {
    //         // Tuesday timestamp
    //     } 
    //     if (now.getDay() === 6) console.log("It's Friday!")
    // }, {
    //     timezone: 'America/New_York'
    // }); 
});