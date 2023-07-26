import Joi from "joi"

export default function validate_payload( type, validator ){

    return function(req, res, next){

        const { error } = validator.validate(req[type]);

        if(error){
            return res.status(400).json({
                status: false,
                message: error.message,
                data: null,
                status_code: 400
            })
        }

        next()

    }
}