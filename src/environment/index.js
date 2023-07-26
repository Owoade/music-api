import { config } from "dotenv";

config();

export const RAPID_API_SHAZAM_API_KEY = process.env.RAPID_API_SHAZAM_API_KEY;

export const RAPID_API_SHAZAM_HOST = process.env.RAPID_API_SHAZAM_HOST;

export const GENIUS_API_CLIENT_ACCESS = process.env.GENIUS_API_CLIENT_ACCESS;

export const REDIS_URL=process.env.REDIS_URL;

export const PORT = process.env.PORT  ?? 3000; 