const ENTERPRISE = require('../models/Enterprise.model');

exports.createEnterpriseAsync = async body => {
	try {
        const { name, detail, logo, status } = body;
		const enterprise = new ENTERPRISE({
			name: name,
			detail: detail,
			logo: logo,
			status: status
		});
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