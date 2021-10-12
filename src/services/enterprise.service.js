const ENTERPRISE = require('../models/Enterprise.model');
const { UploadImage } = require("./uploadFirebase.service");

exports.getOneEnterpriseAsync = async (id) => {
	try {
		const enterprise = await ENTERPRISE.findById({ _id: id });
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
exports.createEnterpriseAsync = async req => {
	try {
		const { name, detail, status } = req.body;
		const Image = req.files["Logo"][0];
		if (Image == null) {
			return {
				message: 'Bạn chưa chọn hình ảnh!!',
				success: false
			};
		}
		const urlImage = await UploadImage(Image.filename, "Enterprises/");
		const enterprise = new ENTERPRISE({
			name: name,
			detail: detail,
			logo: urlImage,
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
exports.updateEnterpriseAsync = async req => {
	try {
		const Image = req.files["Logo"];
		if (Image == null) {
			const enterprise = await ENTERPRISE.findOneAndUpdate(
				{ _id: req.body.id },
				req.body,
				{ new: true }
			);
			return {
				message: 'Successfully Update Enterprise',
				success: true,
				data: enterprise
			};
		}
		else {
			const { name,type, detail, status } = req.body;
			const urlImage = await UploadImage(Image.filename, "Enterprises/");
			const enterprise = await ENTERPRISE.findOneAndUpdate(
				{ _id: req.body.id },
				{
					name: name,
					type: type,
					detail: detail,
					logo: urlImage,
					status: status
				},
				{ new: true }
			);
			return {
				message: 'Successfully Update Enterprise',
				success: true,
				data: enterprise
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
exports.deleteEnterpriseAsync = async (id) => {
	try {
		const enterprise = await ENTERPRISE.deleteOne({ _id: id });
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