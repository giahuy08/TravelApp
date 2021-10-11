const joi = require('@hapi/joi');
const schemas = {
	createEnterprise: joi.object().keys({
		name: joi.string().required(),
        detail: joi.string().required(),
	}),
};
module.exports = schemas;
