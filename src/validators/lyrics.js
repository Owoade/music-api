import Joi from "joi";

const get_lyrics_validator = Joi.object({
    artist: Joi.string().required(),
    title: Joi.string().required()
}).required()

export default get_lyrics_validator;