const controller = require('./controller');
const vehicleServices = require('../services/vehicle.services');
const { defaultRoles } = require('../config/defineModel');
const { configEnv } = require('../config/index');
const { UploadImage } = require("../services/uploadFirebase.service");


exports.getOneVehicleAsync = async (req,res,next) =>{
    try{
        const resServices = await vehicleServices.getOneVehicleAsync(req.query.id);
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
            resServices.error
        );
    }
    catch(err){
        console.log(err);
		return controller.sendError(res);
    }

}

exports.getAllVehicleAsync = async (req,res,next) =>{
    try{
        const resServices = await vehicleServices.getAllVehicleAsync();
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

exports.createVehicleAsync = async (req,res,next) =>{
    try{
        const resServices = await vehicleServices.createVehicleAsync(req);
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

exports.updateVehicleAsync = async (req,res,next) =>{
    try{
        const resServices = await vehicleServices.updateVehicleAsync(req);
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


exports.deleteVehicleAsync = async (req,res,next) =>{
    try{
        const resServices = await vehicleServices.deleteVehicleAsync(req.query.id);
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