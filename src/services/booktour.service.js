const { defaultBookTour } = require('../config/defineModel');
const BOOKTOUR = require("../models/BookTour.model");
const TOUR = require("../models/Tour.model");

exports.bookTourAsync = async (body) => {
    try {
        const bookTour = new BOOKTOUR(body);

        await bookTour.save();

        return {
            message: "Successfully Book Tour",
            success: true,
            data: bookTour,
        };
    } catch (e) {
        return {
            message: "An error occurred",
            success: false,
        };
    }
};

exports.rebookTourAsync = async (body) => {
    try {
        const bookTour = await BOOKTOUR.findOneAndUpdate(
            { idUser: body.idUser, idTour: body.idTour },
            {
                status: defaultBookTour.AWAIT,
            },
            { new: true }
        );
        return {
            message: "Successfully Rebook Tour",
            success: true,
            data: bookTour,
        };
    } catch (e) {
        console.log(e);
        return {
            message: "An error occurred",
            success: false,
        };
    }
};

exports.updateBookTourAsync = async (id, body) => {
    try {
        const bookTour = await BOOKTOUR.findOneAndUpdate(
            { _id: id },
            body,
            { new: true }
        );
        return {
            message: 'Successfully Update BookTour',
            success: true,
            data: bookTour
        };

    } catch (e) {
        console.log(e);
        return {
            message: 'An error occurred',
            success: false
        };
    }
};

exports.deleteBookTourAsync = async (id) => {
    try {
        const bookTour = await BOOKTOUR.delete({ _id: id });

        return {
            message: "Successfully Delete BookTour",
            success: true,
            data: bookTour,
        };
    } catch (e) {
        return {
            message: "An error occurred",
            success: false,
        };
    }
};

exports.deleteForceBookTourAsync = async (id) => {
    try {
        const bookTour = await BOOKTOUR.deleteOne({ _id: id });

        return {
            message: "Successfully Delete forever BookTour",
            success: true,
            data: bookTour,
        };
    } catch (e) {
        return {
            message: "An error occurred",
            success: false,
        };
    }
};

exports.getAllBookTourAsync = async () => {
    try {
        const bookTours = await BOOKTOUR.find();
        return {
            message: "Successfully get all BookTour",
            success: true,
            data: bookTours,
        };
    } catch (e) {
        console.log(e);
        return {
            message: "An error occurred",
            success: false,
        };
    }
};

exports.getUserBookTourAsync = async (id) => {
    try {
        console.log(id);
        const listBookTour = await BOOKTOUR.find({ idUser: id });
        console.log(listBookTour.length);
        console.log(listBookTour[0]._id);
        if (listBookTour == null) {
            return {
                message: "Dont have BookTour",
                success: true,
            };
        }
        else {

            var data = [];
            for (let i = 0; i < listBookTour.length; i++) {
                console.log(listBookTour[i].idTour);
                var tour = await TOUR.findOne({ _id: listBookTour[i].idTour });
                data.push(tour);
            }
            return {
                message: "Successfully get user BookTour",
                success: true,
                data: data,
            };
        }
    } catch (e) {
        console.log(e);
        return {
            message: "An error occurred",
            success: false,
        };
    }
};

exports.getOneBookTourAsync = async (id) => {
    try {
        const BookTour = await BOOKTOUR.findById({ _id: id });
        return {
            message: "Successfully get a BookTour",
            success: true,
            data: BookTour,
        };
    } catch (e) {
        console.log(e);
        return {
            message: "An error occurred",
            success: false,
        };
    }
};
