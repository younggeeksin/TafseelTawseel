import { Linking } from 'react-native'
import Config from './Config'
// import moment from 'moment'


export const isEmpty = obj => {
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) {
        return false;
    }
    if (obj.length === 0) {return true;}

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

export const getCustomAttribute = (customAttributes, attribute) => {
    var value = null
    if (typeof customAttributes != 'undefined' && customAttributes.length > 0) {
        customAttributes.forEach((item) => {
            if (item.attribute_code == attribute) {
                value = item.value
                return
            }
        })
    }
    return value
}

export const getProductImageUrl = (item, attribute = "thumbnail") => {
    if (item.images != undefined && item.images.length > 0) {
        return item.images[0].src
    }
    return "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"
}

export const getCategoryImageUrl = (item) => {
    if (item.image != null) {
        return item.image.src
    }
    return "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"
}

export const openUrl = (url) => {
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            alert('Can\'t handle url: ' + url);
        } else {
            return Linking.openURL(url);
        }
    }).catch(err => console.log('An error occurred', err));
}

export const getCurrentPrice = (product) => {
    if (product.on_sale) {
        return product.sale_price
    }
    return product.price
}
export const format_money = (amount, decimalCount = 3, decimal = ".", thousands = ",") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return (negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : ""))+' .د.ب ';
    } catch (e) {
        console.log(e)
    }
};

export const isNotEmpty = (str) => {
    return (str && str.length > 0) ? true : false
}
