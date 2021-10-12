const joi = require('@hapi/joi');
const schemas = {
    createTour: joi.object().keys({
        name: joi.string().required(),
        place: joi.string().required(),
        detail: joi.string().required(),
        payment: joi.string().required()
    }),
};
module.exports = schemas;
