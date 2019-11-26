import * as ActionTypes from './ActionTypes';
import * as Services from '@services';

export const sign_up = args => {
    return (dispatch, getState) => {
        // console.log('ActionTypes :: sign_up :: args :: ',args)
        dispatch({ type: ActionTypes.SIGN_UP_PENDING });
        Services.sign_up(args)
            .then(resp => {
                // console.log('ActionTypes :: sign_up :: resp :: ',resp)
                // global.internal_token = resp.token;
                dispatch({ type: ActionTypes.SIGN_UP_SUCCESS, resp });
            })
            .catch(errMsg => {
                dispatch({ type: ActionTypes.SIGN_UP_FAIL, message: errMsg });
            });
    };
};

export const sign_in = args => {
    return (dispatch, getState) => {
        // console.log('ActionTypes :: sign_in :: args :: ',args)
        dispatch({ type: ActionTypes.SIGN_IN_PENDING });
        Services.sign_in(args)
            .then(resp => {
                // console.log('ActionTypes :: sign_in :: resp :: ',resp)
                global.internal_token = resp.token;
                dispatch({ type: ActionTypes.SIGN_IN_SUCCESS, resp });
            })
            .catch(errMsg => {
                dispatch({ type: ActionTypes.SIGN_IN_FAIL, message: errMsg });
            });
    };
};

export const sign_out = () => {
    global.internal_token = '';
    return { type: ActionTypes.SIGN_OUT };
};

export const update_profile = args => {
    return (dispatch, getState) => {
        // console.log('ActionTypes :: update_profile :: args :: ',args)
        dispatch({ type: ActionTypes.UPDATE_PROFILE_PENDING });
        Services.update_profile(args)
            .then(resp => {
                // console.log('ActionTypes :: update_profile :: resp :: ',resp)
                // global.internal_token = resp.token;
                dispatch({
                    type: ActionTypes.UPDATE_PROFILE_SUCCESS,
                    message: resp.message
                });
                dispatch({ type: ActionTypes.PROFILE_UPDATED, resp });
            })
            .catch(errMsg => {
                dispatch({
                    type: ActionTypes.UPDATE_PROFILE_FAIL,
                    message: errMsg
                });
            });
    };
};
