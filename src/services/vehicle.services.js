const VEHICLE = require('../models/Vehicle.model');
const { configEnv } = require('../config/index');
const { UploadImage } = require("./uploadFirebase.service");




exports.getOneVehicleAsync = async (id) => {
    try {
        const vehicle = await VEHICLE.findById({ _id: id });



        return {
            message: 'Get one vehicle successfully',
            success: true,
            data: vehicle

        };



    }
    catch (err) {
        console.log(err);
        return {
            error: 'Internal Server',
            success: false
        };
    }
}

exports.getAllVehicleAsync = async () => {
    try {
        const vehicle = await VEHICLE.find();
        return {
            message: 'Get all vehicle successfully',
            success: true,
            data: vehicle

        };

    }
    catch (err) {
        console.log(err);
        return {
            error: 'Internal Server',
            success: false
        };
    }
}


exports.createVehicleAsync = async body => {
    try {
        // const { name, type, vehicleNumber } = req.body;
        // const Image = req.files["ImagesVehicle"];
        // if (Image == null) {
        //     return {
        //         message: 'Bạn chưa chọn hình ảnh!!',
        //         success: false
        //     };
        // }
        // var urlImageMain = [];
        // for (let i = 0; i < Image.length; i++) {
        //     var addImage = req.files["ImagesVehicle"][i];
        //     console.log(addImage.filename);
        //     const urlImage = await UploadImage(addImage.filename, "Vehicles/");
        //     urlImageMain.push(urlImage);
        // }
        const vehicle = new VEHICLE(body);
        await vehicle.save();
        return {
            message: 'Successfully Create Vehicle',
            success: true,
            data: vehicle

        };

    }
    catch (err) {
        console.log(err);
        return {
            error: 'Internal Server',
            success: false
        };
    }
}


exports.updateVehicleAsync = async (id, body) => {
    try {
        // const Image = req.files["Image"];
        // if (Image == null) {
            const vehicle = await VEHICLE.findOneAndUpdate(
                { _id: id },
                body,
                {
                    new: true
                }
            )
            return {
                message: 'Update vehicle successfully',
                success: true,
                data: vehicle

            };
        // }
        // else {
        //     //const { name, type, vehicleNumber } = req.body;
        //     var urlImageMain = [];
        //     for (let i = 0; i < Image.length; i++) {
        //         var addImage = req.files["Image"][i];
        //         console.log(addImage.filename);
        //         const urlImage = await UploadImage(addImage.filename, "Vehicles/");
        //         urlImageMain.push(urlImage)
        //     }
        //     const vehicle = await VEHICLE.findOneAndUpdate(
        //         { _id: req.body.id },
        //         req.body = {
        //             imagesVehicle: urlImageMain
        //         },
        //         { new: true }
        //     );
        //     return {
        //         message: 'Update vehicle successfully',
        //         success: true,
        //         data: vehicle

        //     };
        // }
    }
    catch (err) {
        console.log(err);
        return {
            error: 'An error occurred',
            success: false
        };
    }
}


exports.deleteVehicleAsync = async (id) => {
    try {
        const vehicle = await VEHICLE.deleteOne({ _id: id })

        return {
            message: 'Delete vehicle successfully',
            success: true,


        };

    }
    catch (err) {
        console.log(err);
        return {
            error: 'An error occurred',
            success: false
        };
    }
}