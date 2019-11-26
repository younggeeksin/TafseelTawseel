import * as ActionTypes from './ActionTypes';
import * as Services from '@services';

export const get_vendors_list = () => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.GET_VENDORS_LIST_PENDING });
        Services.get_vendors_list()
            .then(vendors => {
                dispatch({
                    type: ActionTypes.GET_VENDORS_LIST_SUCCESS,
                    vendors
                });
            })
            .catch(errMsg => {
                dispatch({
                    type: ActionTypes.GET_VENDORS_LIST_FAIL,
                    message: errMsg
                });
            });
    };
};
