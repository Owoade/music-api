# Music API Documentation

Welcome to the Music API documentation! This API allows you to access various music-related information, including artists, albums, tracks, and more. It's designed to provide developers with easy integration and access to a wide range of music data.

## Base URL

The base URL for all API requests is: `https://hilarious-wig-hare.cyclic.app`

## Endpoints

### 1. Search Track.

Retrieve search results of songs.

- Endpoint: `/search?term={term}`
- Method: GET
- Parameters:
  - `term` (required):this can be a track's title, artist e.t.c.

Example:

GET https://hilarious-wig-hare.cyclic.app/search?term=hillsong


### 2. Top Tracks.

Get Top tracks.

- Endpoint: `/top-tracks`
- Method: GET

Example: 

GET https://hilarious-wig-hare.cyclic.app/top-tracks


### 3. Get lyrics

Retrieve lyrics.

- Endpoint: `/lyrics?title={title}&artist={artist}`
- Method: GET
- Parameters:
  - `title` (required): Title of the songs.
  - `artist` (required): The artist of the songs.

Example:

GET https://hilarious-wig-hare.cyclic.app/lyrics?title=oceans&artist=hillsongs


## Response Format

The API responses are in JSON format.

### Get Lyrics

```json
{
 "status": true,
    "message": "Lyrics successfully retrieved",
    "data": {
        "lyrics": "<br/>[Verse 1]<br/> It's lonely at the top (Lonely, lonely, lonely) Money on my mind<br/>(Money, money, money) Don’t care what they yarning about me in particular (Ko<br/>kan mi, kan mi, kan mi) Out here on the road chasing my dream because I know (No<br/>one can chase it for me) <br/>[Pre-Chorus]<br/> Ọ́lọ-lọlade maa n gb'ọmọ lọ (Gb'ọmọ lọ)<br/>Bọrọkọtọ idi ṣ’ọmọ lọ (Ṣ'ọmọ lọ) Ẹ fi wọn s'ilẹ jẹ kan ma lọ No dey find anybody<br/>na money I want (Me I want) No dey hear wetin people dey talk (People dey talk)<br/>Wọn ti ge Aṣakẹ l'eti lọ (L'eti lọ) They life na one no get another onе I go<br/>take am do wetin I love <br/>[Chorus]<br/> Wеtin you love o No be wetin I love o Wetin I<br/>love I go do am with all my heart o Ogogoro no be vodka Mr. Money ginger But una<br/>know I no dey waste time Mr. Money ginger <br/>[Verse 2]<br/> Just carry girl baby no time<br/>Bad boy me I dey fine And at the same time me I dey high Mo duro tan, mo stand<br/>out calm down You go dey fine like fine wine, no decline Sing about it,<br/>extraordinary things Show me love, I go show you more O pọ lọ pọ, pọ Wo bo ṣe n<br/>ṣe, wo bo ṣe n ṣe Ọmọ e don tey, je a ṣ'ere kéré Mo n fọ f'aye, mo ti fọ f'aye<br/>Ye, ye <br/>[Pre-Chorus]<br/> Ọ́lọ-lọlade maa n gb’ọmọ lọ (Gb’ọmọ lọ) Bọrọkọtọ idi ṣ'ọmọ lọ<br/>(Ṣ’ọmọ lọ) Ẹ fi wọn s'ilẹ jẹ kan ma lọ No dey find anybody na money me I want<br/>(Me I want) No dey wetin people dey talk (People dey talk) Wọn te ge Aṣakẹ l'eti<br/>lọ (L'eti lọ) They say life na one no get another one I go take am do wetin I<br/>love <br/>[Chorus]<br/> Wetin you love o No be wetin I love o Wetin I love I go do am with<br/>all my heart o Ogogoro no be vodka Mr. Money ginger But una know I no dey waste<br/>time Mr. Money ginger<br/>"
    },
    "status_code": 200
}
```

### Top Tracks
```json
{
    "status": true,
    "message": "Top tracks successfully retrieved",
    "data": {
        "tracks": [
            {
                "image": "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/7d/64/76/7d64761e-a9b3-6754-8ae1-b457338beead/23UMGIM77779.rgb.jpg/400x400cc.jpg",
                "artist_image": "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/aa/64/c1/aa64c19b-b273-76ee-f785-05ee22555de4/pr_source.png/800x800cc.jpg",
                "title": "What Was I Made For? [From The Motion Picture \"Barbie\"]",
                "subtitle": "Billie Eilish",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/f9/6d/3d/f96d3d31-01e5-9432-98eb-1e7543f95df2/mzaf_4902063008893623849.plus.aac.ep.m4a"
            },
            {
                "image": "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/67/91/6c/67916c48-0d55-9260-e2f4-49ede903d279/cover.jpg/400x400cc.jpg",
                "artist_image": "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/67/91/6c/67916c48-0d55-9260-e2f4-49ede903d279/cover.jpg/400x400cc.jpg",
                "title": "Džanum",
                "subtitle": "Teya Dora",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/b1/e3/dd/b1e3dd80-171e-b927-d55d-b15508e19b4e/mzaf_6635262664981298608.plus.aac.ep.m4a"
            },
            {
                "image": "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/f9/40/ce/f940ce64-ef5e-9ed0-5171-45d790b8b999/23UMGIM66787.rgb.jpg/400x400cc.jpg",
                "artist_image": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/2d/85/9c/2d859cc8-7230-8ba7-b741-a7c7c029bed6/8be5558a-5c13-48da-a649-a873856f3fb0_ami-identity-777ad796f94973f081f3e54e4b81fcb1-2023-07-22T13-59-27.161Z_cropped.png/800x800cc.jpg",
                "title": "Popular (feat. Playboi Carti) [Music from the HBO Original Series The Idol]",
                "subtitle": "The Weeknd & Madonna",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a2/f5/6f/a2f56fe9-59af-3adc-2d0f-4a7ab5df64f3/mzaf_5953370175813994243.plus.aac.ep.m4a"
            },
            {
                "image": "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/2e/a7/75/2ea77552-aa74-8cf1-4765-0529f6080c26/23SYMIM03701.rgb.jpg/400x400cc.jpg",
                "artist_image": "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/0c/ad/f1/0cadf121-b332-b02d-12d9-50cafd103190/516b46b4-4276-4575-ae88-6ba53f613dad_file_cropped.png/800x800cc.jpg",
                "title": "Daylight",
                "subtitle": "David Kushner",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c6/50/55/c6505541-d6f9-ca32-b4e4-042900832b5b/mzaf_15495323272353546067.plus.aac.ep.m4a"
            },
            {
                "image": "https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/82/29/76/822976d1-f1db-6626-e2f7-55343995ecd9/075679678485.jpg/400x400cc.jpg",
                "artist_image": "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/80/a6/37/80a637c6-58c6-f837-4ede-f9937fa2e3bb/085c855c-8d4b-433d-8131-4f15c2a03e68_file_cropped.png/800x800cc.jpg",
                "title": "fukumean",
                "subtitle": "Gunna",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/24/49/7d/24497d34-fc26-9b47-b11a-e75dfd484d46/mzaf_4851612424774733355.plus.aac.p.m4a"
            },
            {
                "image": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/47/22/fa/4722fa0d-046c-172b-5e8d-3f7003d80ca1/075679677600.jpg/400x400cc.jpg",
                "artist_image": "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/42/ba/a9/42baa989-e090-3478-113a-e6b68efbf531/pr_source.png/800x800cc.jpg",
                "title": "Barbie World (with Aqua) [From Barbie The Album]",
                "subtitle": "Nicki Minaj & Ice Spice",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/e3/f6/a9/e3f6a98e-39cf-f362-f29d-1e92f2f30188/mzaf_13218820778727818187.plus.aac.p.m4a"
            },
            {
                "image": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/50/32/fd/5032fddc-e486-956d-a503-7ec6d17af848/22UM1IM46463.rgb.jpg/400x400cc.jpg",
                "artist_image": "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/9d/11/2e/9d112e73-3003-1289-9888-f6b72ec76ae9/44644485-08d0-4da5-9471-4185ed3089d6_ami-identity-ebd31eb1e543e630fcd5a70d51ee8e60-2023-02-27T10-45-58.766Z_cropped.png/800x800cc.jpg",
                "title": "Tattoo",
                "subtitle": "Loreen",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/28/a3/3e/28a33e92-39f5-ba72-9b18-bba16f9b36de/mzaf_9634311354149611886.plus.aac.ep.m4a"
            },
            {
                "image": "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/5e/74fb5e22-3a1b-4468-dc14-e097dc635e44/075679911506.jpg/400x400cc.jpg",
                "artist_image": "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/d4/d6/3e/d4d63ed7-7598-6d20-8445-549ba63ea112/pr_source.png/800x800cc.jpg",
                "title": "Way Down We Go",
                "subtitle": "KALEO",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/14/01/21/1401211a-1d70-9cd8-0407-e15b7be3a0b8/mzaf_9497497501827389301.plus.aac.ep.m4a"
            },
            {
                "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9b/d8/9c/9bd89c9e-b44d-ad25-1516-b9b30f64fd2a/23UMGIM71510.rgb.jpg/400x400cc.jpg",
                "artist_image": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/34/dd/36/34dd3678-40c6-9d8b-fa0f-cb6d82d3103b/6c46071d-e4d2-4671-a110-6ad83a63b89b_ami-identity-5b05d351a6e3c7256ef7680c8aef2894-2023-06-30T03-58-10.754Z_cropped.png/800x800cc.jpg",
                "title": "vampire",
                "subtitle": "Olivia Rodrigo",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/3f/47/e7/3f47e7af-1b95-dc0b-3919-1ffe55a41cc6/mzaf_4001692411039098733.plus.aac.ep.m4a"
            },
            {
                "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
                "artist_image": "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/12/01/aa/1201aa32-9c7a-20d2-59da-62d5c52475ea/b189593f-d48b-4626-85f1-413a73bfab58_ami-identity-9e987f39368f9dd37966c136969aac14-2023-06-26T16-11-48.592Z_cropped.png/800x800cc.jpg",
                "title": "Calm Down",
                "subtitle": "Rema",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/70/9f/c7/709fc7e3-8e43-4b42-4f6e-c9f0a94842ce/mzaf_8187227090010990098.plus.aac.ep.m4a"
            },
            {
                "image": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/1b/69/e9/1b69e904-6e54-49b9-8b5b-1954de47ef5b/197342295215_cover.jpg/400x400cc.jpg",
                "artist_image": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/1b/69/e9/1b69e904-6e54-49b9-8b5b-1954de47ef5b/197342295215_cover.jpg/400x400cc.jpg",
                "title": "Ka Valungu",
                "subtitle": "Tebza De DJ & DJ Nomza The King",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c5/28/75/c52875fa-3ad7-ca7e-5c32-a3fd52cb1e17/mzaf_3739490493345427409.plus.aac.ep.m4a"
            }
           
        ]
    },
    "status_code": 200
}

```


### Top Tracks

```json
{
    "status": true,
    "message": "Search result successfully retrieved",
    "data": {
        "results": [
            {
                "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/08/8c/24/088c2405-2e33-801b-5c38-e967f2c01e69/191404113974.png/400x400cc.jpg",
                "artist_image": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/a2/2d/df/a22ddf71-9254-043c-c162-11fbc25c5ff3/mzl.ilbjswky.jpg/800x800cc.jpg",
                "title": "Hello",
                "subtitle": "Adele",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d0/0f/8d/d00f8d18-1666-9b80-a3c1-efd2aa93a20f/mzaf_8898984388967624975.plus.aac.ep.m4a"
            },
            {
                "image": "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/56/4d/ba/564dba2a-d681-7ed3-05db-a3dad18fffc4/196871101370.jpg/400x400cc.jpg",
                "artist_image": "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/ce/a3/1f/cea31f1b-e492-b006-44b2-79527488ccbc/cd49f277-8400-4fd8-a077-9918fb6b941d_file_cropped.png/800x800cc.jpg",
                "title": "Hello",
                "subtitle": "Aqyila",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/bb/a6/ea/bba6ea05-d3e8-81bc-bf62-4c1fde586577/mzaf_11444033105491756167.plus.aac.ep.m4a"
            },
            {
                "image": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/3e/95/a1/3e95a13c-086c-2f8a-6c83-376481dc3f16/20UMGIM61787.rgb.jpg/400x400cc.jpg",
                "artist_image": "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/e5/48/88/e5488851-ff42-f0ee-5466-899463fc2ef8/pr_source.png/800x800cc.jpg",
                "title": "Hello (feat. A Boogie wit da Hoodie)",
                "subtitle": "Pop Smoke",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/d7/64/ba/d764bae3-5d53-3970-2853-c50b99469e8d/mzaf_12210569998452209575.plus.aac.ep.m4a"
            },
            {
                "image": "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/89/77/46/897746b8-3d89-c551-4359-7aa440b67b69/mzi.clkeppje.jpg/400x400cc.jpg",
                "artist_image": "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/e7/2b/d0/e72bd06d-6814-1c37-e678-c2ac07228dac/pr_source.png/800x800cc.jpg",
                "title": "Hello",
                "subtitle": "Martin Solveig & Dragonette",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/80/69/1b/80691ba9-30bb-2c5b-929c-55dab79ed6eb/mzaf_79637561581098651.plus.aac.ep.m4a"
            },
            {
                "image": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/8a/60/4f/8a604fba-247c-d4e2-25b0-ed5b230fe948/00602537021598.rgb.jpg/400x400cc.jpg",
                "artist_image": "https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/8d/05/8e/8d058ed9-4dff-0d6a-8e0b-b2d42898ea6a/pr_source.png/800x800cc.jpg",
                "title": "Hello",
                "subtitle": "Lionel Richie",
                "audio_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/47/a1/9d/47a19d17-a17c-c18b-2b91-c5592faba953/mzaf_13053068156969463641.plus.aac.ep.m4a"
            }
        ]
    },
    "status_code": 200
}
```