const joi = require('@hapi/joi');
const schemas = {
    createReviewTour: joi.object().keys({
        idUser: joi.string().required(),
        idTour: joi.string().required(),
        star: joi.number().required(),
        comment: joi.string().required()
    }),
};
module.exports = schemas;
