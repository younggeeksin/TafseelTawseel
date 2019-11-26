import { Constants } from '@common'
import WService from './helper/WService'
var wservice = new WService()
import NetworkHelper from './helper/NetworkHelper'


export const internal_login = () => {
    return new Promise((resolve, reject) => {
        wservice.internal_login()
        .then((response) => {
            console.log('Services Internal :: Login ',response);
            if (response.statusCode == 200) {
                resolve(response.body.token)
            }
            else if (response.statusCode == 403) {
                reject(tr('Internal Email or password is incorrect'))
            }
            else {
                reject(response.body.message)
            }
        })
        .catch(reject)
    })
}

export const validate_token = (token) => {
    return new Promise((resolve, reject) => {
        wservice.validate_token(token)
        .then((response) => {
            console.log('Services Internal :: validate_token',response);
            if (response.statusCode == 200) {
                resolve(response.body.code)
            }
            else if (response.statusCode == 403) {
                reject(tr('Cannot validate token.'))
            }
            else {
                reject(response.body.message)
            }
        })
        .catch(reject)
    })
}
