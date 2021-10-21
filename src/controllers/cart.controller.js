const controller = require('./controller');
const CartServices = require('../services/cart.service');
const TourServices = require('../services/tour.service')
exports.createCartAsync = async (req, res, next) => {
    try{
       

        const {decodeToken} = req.value.body;
        const userId = decodeToken.data.id;
        req.value.body.userId = userId;
        req.value.body.paymentStatus = true
        console.log(req.value.body.paymentStatus)
        const tour = await TourServices.getOneTourAsync(req.value.body.tourId)
        const resServices = await CartServices.createCartAsync(req.value.body);
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
    }
    catch(e)
    {
     
		return controller.sendError(res);
    }
}
