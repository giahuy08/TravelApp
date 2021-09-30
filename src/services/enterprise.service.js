const ENTERPRISE = require('../models/Enterprise.model');

exports.getOneEnterpriseAsync = async (id) => {
	try {
		const enterprise = await ENTERPRISE.findById({_id: id});
		return {
			message: 'Successfully Get One Enterprise',
			success: true,
			data: enterprise
		};
	} catch (e) {
		console.log(e);
		return {
			message: 'An error occurred',
			success: false
		};
	}
};
exports.getAllEnterpriseAsync = async () => {
	try {
		const enterprise = await ENTERPRISE.find();
		return {
			message: 'Successfully Get All Enterprise',
			success: true,
			data: enterprise
		};
	} catch (e) {
		console.log(e);
		return {
			message: 'An error occurred',
			success: false
		};
	}
};
exports.createEnterpriseAsync = async body => {
	try {
		const enterprise = new ENTERPRISE(body);
		await enterprise.save();
		return {
			message: 'Successfully create Enterprise',
			success: true,
			data: enterprise
		};
	} catch (e) {
		console.log(e);
		return {
			message: 'An error occurred',
			success: false
		};
	}
};
exports.updateEnterpriseAsync = async (id, body) => {
	try {
		const enterprise = await ENTERPRISE.findOneAndUpdate(
			{ _id: id },
			body,
			{
				new: true
			}
		);
		return {
			message: 'Successfully Update Enterprise',
			success: true,
			data: enterprise
		};
	} catch (e) {
		console.log(e);
		return {
			message: 'An error occurred',
			success: false
		};
	}
};
exports.deleteEnterpriseAsync = async (id) => {
	try {
		const enterprise = await ENTERPRISE.deleteOne({_id: id});
		return {
			message: 'Successfully Delete Enterprise',
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