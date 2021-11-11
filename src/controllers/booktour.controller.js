const controller = require("./controller");
const bookTourServices = require("../services/bookTour.service");
const { defaultBookTour } = require('../config/defineModel');
const TOUR = require("../models/Tour.model");
const BOOKTOUR = require("../models/BookTour.model");
const USER = require("../models/User.model");
exports.bookTourAsync = async (req, res, next) => {
    try {
        const { decodeToken } = req.value.body;
        const userId = decodeToken.data.id;
        req.value.body.idUser = userId;
        const idTour = req.value.body.idTour;
        var tour = await TOUR.findOne({ _id: idTour });
        if (tour == null) {
            return controller.sendSuccess(res, null, 404, "Tour does not exist");
        }
        const booktour = await BOOKTOUR.findOne({ idUser: userId, idTour: idTour, status: defaultBookTour.AWAIT });
        if (booktour != null) {
            return controller.sendSuccess(res, null, 300, "The tour is already booked");
        }
        const resServices = await bookTourServices.bookTourAsync(req.value.body);
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
    } catch (e) {
        return controller.sendError(res);
    }
};

exports.updateBookTourAsync = async (req, res, next) => {
    try {
        if (req.body.idTour != null) {
            const tour = await TOUR.findOne({ _id: req.body.idTour });
            if (tour == null) {
                return controller.sendSuccess(
                    res,
                    null,
                    404,
                    'Tour does not exist'
                );
            }
        }
        if (req.body.idUser != null) {
            const user = await USER.findOne({ _id: req.body.idUser });
            if (user == null) {
                return controller.sendSuccess(
                    res,
                    null,
                    404,
                    'User does not exist'
                );
            }
        }
        const resServices = await bookTourServices.updateBookTourAsync(req.body.id, req.body);
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

exports.deleteBookTourAsync = async (req, res, next) => {
    try {
        const resServices = await bookTourServices.deleteBookTourAsync(req.query.id);

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
    } catch (e) {
        return controller.sendError(res);
    }
};


exports.deleteForceBookTourAsync = async (req, res, next) => {
    try {
        const resServices = await bookTourServices.deleteForceBookTourAsync(req.query.id);

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
    } catch (e) {
        return controller.sendError(res);
    }
};


exports.getAllBookTourAsync = async (req, res, next) => {
    try {
        const resServices = await bookTourServices.getAllBookTourAsync();
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


exports.getOneBookTourAsync = async (req, res, next) => {
    try {
        const resServices = await bookTourServices.getOneBookTourAsync(req.query.id);
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



exports.getUserBookTourAsync = async (req, res, next) => {
    try {
        let query = {
            limit: req.query.limit || '15',
            skip: req.query.skip || '1',
        };
        const { decodeToken } = req.value.body;
        const userId = decodeToken.data.id;
        const resServices = await bookTourServices.getUserBookTourAsync(userId, query);
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

