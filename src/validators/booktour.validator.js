const joi = require('@hapi/joi');
const schemas = {
	bookTour: joi.object().keys({
		idUser: joi.string(),
		status: joi.number(),
		idTour: joi.string(),
		finalpayment: joi.number(),
		codediscount: joi.string(),
	}),
};
module.exports = schemas;
