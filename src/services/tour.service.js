const TOUR = require('../models/Tour.model');
const { UploadImage } = require("./uploadFirebase.service");

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
exports.createTourAsync = async req => {
    try {
        //const { name, place, detail, payment } = req.value.body;
        const Image = req.files["ImageTour"];
        if (Image == null) {
            return {
                message: 'Bạn chưa chọn hình ảnh!!',
                success: false
            };
        }
        var urlImageMain = [];
        for (let i = 0; i < Image.length; i++) {
            var addImage = req.files["ImageTour"][i];
            console.log(addImage.filename);
            const urlImage = await UploadImage(addImage.filename, "Tours/" + name.toString() + "/");
            urlImageMain.push(urlImage);
        }
        const tour = new TOUR(req.value.body = {
            imagesTour: urlImageMain
        });
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
exports.updateTourAsync = async req => {
    try {
        const Image = req.files["ImageTour"];
        if (Image == null) {
            const tour = await TOUR.findOneAndUpdate(
                { _id: req.body.id },
                req.body,
                { new: true }
            );
            return {
                message: 'Successfully Update Tour',
                success: true,
                data: tour
            };
        }
        else {
            //const { name, place, detail, payment, status } = req.body;
            var urlImageMain = [];
            for (let i = 0; i < Image.length; i++) {
                var addImage = req.files["ImageTour"][i];
                console.log(addImage.filename);
                const urlImage = await UploadImage(addImage.filename, "Tours/");
                urlImageMain.push(urlImage);
            }
            const tour = await TOUR.findOneAndUpdate(
                { _id: req.body.id },
                req.body = {
                    imagesTour: urlImageMain
                },
                { new: true }
            );
            return {
                message: 'Successfully Update Tour',
                success: true,
                data: tour
            };
        }

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