import Joi from "joi";

const search_validator = Joi.object({
    term: Joi.string().required()
}).required()

export default search_validator