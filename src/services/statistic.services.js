const USER = require('../models/User.model');
const TOUR = require('../models/Tour.model');
const BOOKTOUR = require("../models/BookTour.model");
const { defaultCategoryTour, defaultBookTour } = require('../config/defineModel');

exports.statisticByData = async () => {
    try {
        const listuser = await USER.countDocuments();
        const listtour = await TOUR.find();
        const listothers = await TOUR.countDocuments({ category: defaultCategoryTour.others });
        const listsea = await TOUR.countDocuments({ category: defaultCategoryTour.sea });
        const listhighland = await TOUR.countDocuments({ category: defaultCategoryTour.highland });
        var tour = {
            all: listtour.length,
            others: listothers,
            sea: listsea,
            highland: listhighland
        }
        const listbooktour = await BOOKTOUR.countDocuments();
        const listCOMPLETE = await BOOKTOUR.countDocuments({ status: defaultBookTour.COMPLETE });
        const listAWAIT = await BOOKTOUR.countDocuments({ status: defaultBookTour.AWAIT });
        const listCANCEL = await BOOKTOUR.countDocuments({ status: defaultBookTour.CANCEL });
        var booktour = {
            all: listbooktour,
            complete: listCOMPLETE,
            await: listAWAIT,
            cancel: listCANCEL
        }
        var statistictour = [];
        for (let i = 0; i < listtour.length; i++) {
            var bt = await BOOKTOUR.countDocuments({ idTour: listtour[i]._id });
            var result = {
                idtour: listtour[i]._id,
                countbooktour: bt.length
            };
            statistictour.push(result);
        }
        var result = {
            user: listuser,
            tour: tour,
            booktour: booktour,
            statistictour: statistictour
        };
        return {
            message: 'Successfully Get Statistic Data',
            success: true,
            data: result
        };
    } catch (e) {
        console.log(e);
        return {
            message: 'An error occurred',
            success: false
        };
    }
};

// exports.staticByOrder = async body => {
// 	try {
// 		const { timeStart, timeEnd} = body;
//     const currentTime = new Date(timeStart);
//     const start = new Date(currentTime.getTime()-7*3600*1000);
// 		let endTimeByDay = new Date(timeEnd).setHours(23, 59, 59, 999);
// 		const end = new Date(new Date(endTimeByDay).getTime()-7*3600*1000);
//     var listOrder = await ORDER.find({
//       status: { $in: [0, 1, 2, 3] },
// 			createdAt: {
// 				$gte: start,
// 				$lt: end
// 			}
//     });
//     var totalMoney = 0 ;
//     var totalOrder = listOrder.length ;
//     listOrder.forEach(e => {
//       totalMoney =  e.totalMoney + totalMoney;
//     });
// 		var result = {
// 			totalOrder: totalOrder,
// 			totalMoney: totalMoney
// 		}
// 		return {
// 			message: 'Successfully Statistic By Time',
// 			success: true,
// 			data: result
// 		};
// 	} catch (err) {
// 		console.log(err);
// 		return {
// 			error: 'Internal Server',
// 			success: false
// 		};
// 	}
// };
// exports.staticByProduct = async body => {
// 	try {
// 		var listProduct = await PRODUCT.find().sort({sold:-1});
// 		var arrayListProduct = [];
// 		if(listProduct.length<5)
// 		{
// 			for(let i = 0; i < listProduct.length;i++)
// 			{
// 				var arrayImage = [];
// 				image = await uploadServices.getImageS3(listProduct[i].image[0]);
// 				arrayImage.push(image);
// 				listProduct[i].image = arrayImage;
// 				arrayListProduct.push(listProduct[i]);
// 			}
// 		}
// 		else
// 		{
// 			for(let i = 0; i < 5;i++)
// 			{
// 				var arrayImage = [];
// 				image = await uploadServices.getImageS3(listProduct[i].image[0]);
// 				arrayImage.push(image);
// 				listProduct[i].image = arrayImage;
// 				arrayListProduct.push(listProduct[i]);
// 			}
// 		}
// 		return {
// 			message: 'Successfully Statistic By Time',
// 			success: true,
// 			data: arrayListProduct
// 		};
// 	} catch (err) {
// 		console.log(err);
// 		return {
// 			error: 'Internal Server',
// 			success: false
// 		};
// 	}
// };