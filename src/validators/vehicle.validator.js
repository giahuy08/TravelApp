const joi = require('@hapi/joi');
const schemas = {
	createVehicle: joi.object().keys({
		name: joi.string().required(),
        vehicleNumber:joi.string().required()
	}),
};
module.exports = schemas;
