import express from "express";
import cors from "cors";
import validate_payload from "./middlewares/validate-payload.js";
import search_validator from "./validators/search.js";
import music_service from "./services/music.js";
import get_lyrics_validator from "./validators/lyrics.js";
import { PORT } from "./environment/index.js";
import redis from "./cache/redis.js";

const app = express();

app.use( cors({
    origin: "*"
}))

app.get("/search", validate_payload("query", search_validator), async function( req, res ){

    const { term } = req.query;

    const results = await music_service.search( term );

    return res.status(200).json({
        status: true,
        message: "Search result successfully retrieved",
        data: { results },
        status_code: 200
    })

})

app.get("/lyrics", validate_payload("query", get_lyrics_validator), async function( req, res ){

    const lyrics = await music_service.get_lyrics(req.query);

    return res.status(200).json({
        status: true,
        message: "Lyrics successfully retrieved",
        data: lyrics,
        status_code: 200
    })

})

app.get("/top-tracks", async function( req, res ){

    const tracks = await music_service.get_top_tracks();

    return res.status(200).json({
        status: true,
        message: "Lyrics successfully retrieved",
        data: { tracks },
        status_code: 200
    })

})

redis.connect()

Promise.all([ app.listen(PORT) ])
.then( ()=> console.log(`Server running on ${PORT}`) )