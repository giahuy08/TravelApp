const joi = require('@hapi/joi');
const schemas = {
	bookTour: joi.object().keys({
        idUser: joi.string(),
        status: joi.number(),
  		idTour: joi.string(),
	}),
};
module.exports = schemas;
