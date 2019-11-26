import { Constants } from '@common'
import WService from './helper/WService'
var wservice = new WService()
import NetworkHelper from './helper/NetworkHelper'

export const get_measurement = (args) => {
	return new Promise((resolve, reject) => {
		// console.log('WService :: get_measurement :: Promise :: ',resolve, reject);
		// console.log('WService :: get_measurement :: args :: ',args);
		wservice.get_measurement(args)
		.then((response) => {
			// console.log('WService :: get_measurement :: resp :: ',response)
			if (response.statusCode === 200) {
				resolve(response.body)
			}
			else {
				reject(response.body.message || response.body)
			}
		})
		.catch(reject)
	})
}

export const store_measurement = (args) => {
	return new Promise((resolve, reject) => {
		// console.log('WService :: store_measurement :: Promise :: ',resolve, reject);
		// console.log('WService :: store_measurement :: args :: ',args);
		wservice.store_measurement(args)
		.then((response) => {
			// console.log('WService :: store_measurement :: resp :: ',response)
			if (response.statusCode === 200) {
				resolve(response.body)
			}
			else {
				reject(response.body.message || response.body)
			}
		})
		.catch(reject)
	})
}

export const update_measurement = (args) => {
	return new Promise((resolve, reject) => {
		// console.log('WService :: update_measurement :: Promise :: ',resolve, reject);
		// console.log('WService :: update_measurement :: args :: ',args);
		wservice.update_measurement(args)
		.then((response) => {
			// console.log('WService :: update_measurement :: resp :: ',response)
			if (response.statusCode === 200) {
				resolve(response.body)
			}
			else {
				// console.log('WService :: update_measurement :: response :: error :: ',response);
				reject(response.body.message || response.body)
			}
		})
		.catch(reject)
	})
}

export const delete_measurement = (args) => {
	return new Promise((resolve, reject) => {
		// console.log('WService :: delete_measurement :: Promise :: ',resolve, reject);
		// console.log('WService :: delete_measurement :: args :: ',args);
		wservice.delete_measurement(args)
		.then((response) => {
			// console.log('WService :: delete_measurement :: resp :: ',response)
			if (response.statusCode === 200) {
				resolve(response.body)
			}
			else {
				reject(response.body.message || response.body)
			}
		})
		.catch(reject)
	})
}
