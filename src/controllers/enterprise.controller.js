const controller = require('./controller');
const enterpriseServices = require('../services/enterprise.service');
const userServices = require('../services/user.services');
const { defaultEnterprises } = require('../config/defineModel');
const { configEnv } = require('../config/index');
const nodemailer = require('nodemailer');

exports.createEnterpriseAsync = async (req, res, next) => {
	try {
		console.log("alo");

		console.log(req.body);
		const resServices = await  enterpriseServices.createEnterpriseAsync(req.body);
		if (resServices.success) {
			return controller.sendSuccess(
				res,
				resServices.data,
				200,
				resServices.message
			);
		}
		return controller.sendSuccess(
			res,
			resServices.data,
			300,
			resServices.message
		);
	} catch (error) {
		// bug
		console.log(error);
		return controller.sendError(res);
	}
};