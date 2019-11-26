import WService from './helper/WService'
var wservice = new WService()

export const get_vendors_list = () => {
		// console.log('services > get_vendors_list');
		return new Promise((resolve, reject) => {
				wservice.get_vendors_list()
				.then((response) => {
						// console.log(response);
						if (response.statusCode == 200) {
								resolve(response.body);
						} else {
								reject(response.body.message || response.body);
						}
				})
				.catch(reject)
		})
}


export const getVendorInfo = (storeId) => {
	return new Promise((resolve, reject) => {
		wservice.getVendorInfo(storeId)
			.then((response) => {
				if (response.statusCode == 200) {
					resolve(response.body);
				} else {
					reject(response.body.message);
				}
			})
			.catch(reject)
	})
}
