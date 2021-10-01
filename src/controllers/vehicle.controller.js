const controller = require('./controller');
const vehicleServices = require('../services/vehicle.services');
const { defaultRoles } = require('../config/defineModel');
const { configEnv } = require('../config/index');

exports.createVehicle = async (req,res,next) =>{
    try{
        const resServices = await vehicleServices.createVehicle(req.body);
        if(resServices.success){

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
    }
    catch(err){
        console.log(err);
		return controller.sendError(res);
    }

}