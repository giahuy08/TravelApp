const controller = require('./controller');
const tourServices = require('../services/Tour.service');
const userServices = require('../services/user.services');
const { defaultTours } = require('../config/defineModel');
const { configEnv } = require('../config/index');
const nodemailer = require('nodemailer');
const { UploadImage } = require("../services/uploadFirebase.service");

exports.getOneTourAsync = async (req, res, next) => {
	try {
		const resServices = await tourServices.getOneTourAsync(req.query.id);
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
exports.getAllTourAsync = async (req, res, next) => {
	try {
		const resServices = await tourServices.getAllTourAsync();
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
exports.createTourAsync = async (req, res, next) => {
	try {
		const Image = req.files["ImagesTour"];
		if (Image == null) {
			return {
				message: 'Bạn chưa chọn hình ảnh!!',
				success: false
			};
		}
		var urlImageMain = [];
		for (let i = 0; i < Image.length; i++) {
			var addImage = req.files["ImagesTour"][i];
			console.log(addImage.filename);
			const urlImage = await UploadImage(addImage.filename, "Tours/" + req.value.body.name + "/");
			urlImageMain.push(urlImage);
		}
		req.value.body.ImageTour = urlImageMain;
		const resServices = await tourServices.createTourAsync(req.value.body);
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
exports.updateTourAsync = async (req, res, next) => {
	try {
		const Image = req.files["ImagesTour"];
		if (Image != null) {
			var urlImageMain = [];
			for (let i = 0; i < Image.length; i++) {
				var addImage = req.files["ImagesTour"][i];
				console.log(addImage.filename);
				const urlImage = await UploadImage(addImage.filename, "Tours/" + req.value.body.name + "/");
				urlImageMain.push(urlImage);
			}
			req.body.ImagesTour = urlImageMain;
		}
		const resServices = await tourServices.updateTourAsync(req.body.id, req.body);
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

exports.deleteTourAsync = async (req, res, next) => {
	try {
		const resServices = await tourServices.deleteTourAsync(req.query.id);
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