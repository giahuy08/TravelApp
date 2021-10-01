const VEHICLE = require('../models/Vehicle.model');
const { configEnv } = require('../config/index');

exports.createVehicle = async body =>{
    try{
        const vehicle = new VEHICLE(body);
        await vehicle.save();
        return {
			message: 'Add Successfully ',
			success: true,
            data:vehicle
		
		};
       
    }
    catch(err)
    {
        console.log(err);
		return {
			error: 'Internal Server',
			success: false
		};
    }
}