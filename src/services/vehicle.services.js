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


exports.createVehicleAsync = async req => {
    try {
        const { name, type, vehicleNumber } = req.body;
        const Image = req.files["Image"];
        if(Image == null)
        {
            return {
                message: 'Bạn chưa chọn hình ảnh!!',
                success: false
            };
        }
        var urlImageMain = [];
        for (let i = 0; i < Image.length; i++) {
            var addImage = req.files["Image"][i];
            console.log(addImage.filename);
            const urlImage = await UploadImage(addImage.filename, "Vehicles/");
            urlImageMain.push(urlImage)
        }
        const vehicle = new VEHICLE({
            name: name,
            type: type,
            vehicleNumber: vehicleNumber,
            imagesVehicle: urlImageMain
        });
        await vehicle.save();
        return {
            message: 'Add Successfully ',
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


exports.updateVehicleAsync = async req => {
    try {
        const Image = req.files["Image"];
        if(Image == null)
        {
            const vehicle = await VEHICLE.findOneAndUpdate(
                { _id: req.body.id },
                req.body,
                {
                    new: true
                }
            )
            return {
                message: 'Update vehicle successfully',
                success: true,
                data: vehicle
    
            };
        }
        else {
            const { name, type, vehicleNumber } = req.body;
            var urlImageMain = [];
            for (let i = 0; i < Image.length; i++) {
                var addImage = req.files["Image"][i];
                console.log(addImage.filename);
                const urlImage = await UploadImage(addImage.filename, "Vehicles/");
                urlImageMain.push(urlImage)
            }
            const vehicle = await VEHICLE.findOneAndUpdate(
                { _id: req.body.id },
                {
                    imagesVehicle: urlImageMain
                },
                {
                    new: true
                }
            )
            vehicle = await VEHICLE.findOneAndUpdate(
                { _id: req.body.id },
                req.body,
                {
                    new: true
                }
            )
            return {
                message: 'Update vehicle successfully',
                success: true,
                data: vehicle
    
            };
        }
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