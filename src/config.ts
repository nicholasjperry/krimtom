import dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, API_KEY } = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
    throw new Error("Missing env variables");
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    API_KEY,
}