const TOUR = require('../models/Tour.model');
const VEHICLE = require('../models/Vehicle.model');
const ENTERPRISE = require('../models/Enterprise.model');

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
exports.getAllTourAsync = async body => {
    try {
        const { skip,limit} = body;
        const tour = await TOUR.find().sort({createdAt: -1}).skip(Number(limit) * Number(skip) - Number(limit)).limit(Number(limit));
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
        const tour = await TOUR.delete({ _id: id });
        return {
            message: 'Successfully Delete Tour',
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

exports.findTourByNameAsync = async (name) => {
    try {
        var nameRegex = new RegExp(name)
        const tour = await TOUR.find({name :{$regex: nameRegex, $options: 'i'}});
        if(tour.length==0){
            return {
                message: 'Dont find tour',
                success: true,
            };
        }
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

exports.findTourByCategoryAsync = async body => {
    try {
        const { category,skip,limit} = body;
        const tour = await TOUR.find({ category: category }).sort({createdAt: -1}).skip(Number(limit) * Number(skip) - Number(limit)).limit(Number(limit));
        if(tour.length==0){
            return {
                message: 'Dont find tour',
                success: true,
            };
        }
        return {
            message: 'Successfully Get List Tour',
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

exports.findAllTourByCategoryAsync = async (category) => {
    try {
        const tour = await TOUR.find({category: category});
        if(tour.length==0){
            return {
                message: 'Dont find tour',
                success: true,
            };
        }
        return {
            message: 'Successfully Get List Tour',
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