import * as ActionTypes from './ActionTypes';
import * as Services from '@services';

export const get_vendor_categories = vendor_id => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.GET_VENDOR_CATEGORIES_PENDING });
        // console.log('get_vendor_categories :: ')
        Services.get_vendor_categories(vendor_id)
            .then(resp => {
                dispatch({
                    type: ActionTypes.GET_VENDOR_CATEGORIES_SUCCESS,
                    resp
                });
            })
            .catch(errMsg => {
                dispatch({
                    type: ActionTypes.GET_VENDOR_CATEGORIES_FAIL,
                    message: errMsg
                });
            });
    };
};
