import axios from "axios";
import { GENIUS_API_CLIENT_ACCESS, RAPID_API_SHAZAM_API_KEY, RAPID_API_SHAZAM_HOST } from "../environment/index.js";
import redis from "../cache/redis.js";
import { getLyrics } from "genius-lyrics-api";
import prettier from "prettier";

class MusicService {
    
    #request

    constructor(){

        this.#request = axios.create({
          baseURL: "https://shazam.p.rapidapi.com",
          headers: {
            "X-RapidAPI-Key":
              RAPID_API_SHAZAM_API_KEY,

            "X-RapidAPI-Host":RAPID_API_SHAZAM_HOST,
          },
        });
        
    }

    async search( term ){
        
        const response = await this.#request.get("/search",  {
            params: {
                term
            }
        })

        const transformed_response = response.data?.tracks?.hits.map( hit => ({
            image: hit.track.images.coverarthq,
            artist_image: hit.track.images.background,
            title: hit.track.title,
            subtitle: hit.track.subtitle,
             audio_url: hit.track.hub.actions[1].uri
        }))

        return transformed_response;

    }

    async get_top_tracks(){

        const response = await this.#request.get('/charts/track');

        const transformed_response = response.data.tracks.map( track => ({
            image: track.images.coverarthq,
            artist_image: track.images.background,
            title: track.title,
            subtitle: track.subtitle,
             audio_url: track.hub.actions[1].uri
        }))

      return transformed_response;
    }

    async get_lyrics( payload ){

        const { artist, title } = payload;

        const opts = {
            title,
            artist,
            apiKey: GENIUS_API_CLIENT_ACCESS,
            optimizeQuery: true
        }

        let lyrics = await getLyrics(opts);

        lyrics = await prettier.format(lyrics, { semi: false, parser: 'html' })

        lyrics = lyrics.replace(/\[/g, '<br/>[')

        lyrics = lyrics.replace(/]/g, ']<br/>')

        lyrics = lyrics.replace(/\n/g   , '<br/>' )

        return { lyrics }

    }

}

const music_service = new MusicService();

export default music_service;