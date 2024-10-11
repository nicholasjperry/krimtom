import dotenv from "dotenv";

dotenv.config();

const { BOT_TOKEN, API_KEY } = process.env;

if (!BOT_TOKEN) {
    throw new Error("Missing env variables");
}

export const config = {
    BOT_TOKEN,
    API_KEY,
}