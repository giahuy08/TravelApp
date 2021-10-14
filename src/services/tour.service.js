const TOUR = require('../models/Tour.model');

exports.getOneTourAsync = async (id) => {
    try {
        const tour = await TOUR.findById({ _id: id });
        return {
            message: 'Successfully Get One Tour',
            success: true,
            data: tour
        };
    } catch (e) {
        console.log(e);
        return {
            message: 'An error occurred',
            success: false
        };
    }
};
exports.getAllTourAsync = async () => {
    try {
        const tour = await TOUR.find();
        return {
            message: 'Successfully Get All Tour',
            success: true,
            data: tour
        };
    } catch (e) {
        console.log(e);
        return {
            message: 'An error occurred',
            success: false
        };
    }
};
exports.createTourAsync = async body => {
    try {
        const tour = new TOUR(body);
        await tour.save();
        return {
            message: 'Successfully create Tour',
            success: true,
            data: tour
        };

    } catch (e) {
        console.log(e);
        return {
            message: 'An error occurred',
            success: false
        };
    }
};
exports.updateTourAsync = async (id, body) => {
    try {

        const tour = await TOUR.findOneAndUpdate(
            { _id: id },
            body,
            { new: true }
        );
        return {
            message: 'Successfully Update Tour',
            success: true,
            data: tour
        };

    } catch (e) {
        console.log(e);
        return {
            message: 'An error occurred',
            success: false
        };
    }
};
exports.deleteTourAsync = async (id) => {
    try {
        const tour = await TOUR.deleteOne({ _id: id });
        return {
            message: 'Successfully Delete Tour',
            success: true,
        };
    } catch (e) {
        console.log(e);
        return {
            message: 'An error occurred',
            success: false
        };
    }
};