import axios from 'axios'
class NetworkHelper {
	static requestPost(url, params, headers = null) {
		return NetworkHelper.requestHttp('POST', url, params, headers)
	}
	static requestGet(url, params, headers = null) {
		return NetworkHelper.requestHttp('GET', url, params, headers)
	}
	static requestPut(url, params, headers = null) {
		return NetworkHelper.requestHttp('PUT', url, params, headers)
	}
	static requestPatch(url, params, headers = null) {
		return NetworkHelper.requestHttp('PATCH', url, params, headers)
	}
	static requestDelete(url, params, headers = null) {
		return NetworkHelper.requestHttp('DELETE', url, params, headers)
	}
	static requestHttp(method, url, params) {
		return new Promise((resolve, reject) => {
			var options = {
				method,
				url,
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}
			if (params) {
				if(method === 'GET'){
					options.params = params
				}
				else{
					options.data = params
				}
			}
			if (global.internal_token) {
				options.headers["Authorization"] = 'Bearer ' + global.internal_token
			}
			// console.log('axios :: ' ,options);
			axios(options)
			.then((response)=>{
				resolve({ statusCode: response.status, body: response.data })
			})
			.catch((error)=>{
				if (error.response != undefined) {
					resolve({ statusCode: error.response.status, body: error.response.data })
				}
				else{
					reject(tr("Can not connect to server"))
				}
			})
		});
	}
}

export default NetworkHelper
