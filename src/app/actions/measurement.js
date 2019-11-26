import * as ActionTypes from './ActionTypes';
import * as Services from '@services';

export const get_measurement = args => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.GET_MEASUREMENT_PENDING });
        // console.log('get_measurement args', args);
        Services.get_measurementargs
            .then(resp => {
                dispatch({ type: ActionTypes.GET_MEASUREMENT_SUCCESS, resp });
                // console.log('get_measurement respo', resp);
                // console.log('get_measurement respo', this.state);
            })
            .catch(errMsg => {
                dispatch({
                    type: ActionTypes.GET_MEASUREMENT_FAIL,
                    message: errMsg
                });
                //console.log('get_measurement fail', errMsg);
            });
    };
};

export const store_measurement = args => {
    return (dispatch, storeState) => {
        dispatch({ type: ActionTypes.SAVE_MEASUREMENT_PENDING });
        // console.log('store_measurement args', args);
        Services.store_measurementargs
            .then(resp => {
                dispatch({ type: ActionTypes.SAVE_MEASUREMENT_SUCCESS, resp });
                // console.log('store_measurement respo', resp);
                // console.log('store_measurement respo', this.state);
            })
            .catch(errMsg => {
                dispatch({
                    type: ActionTypes.SAVE_MEASUREMENT_FAIL,
                    message: errMsg
                });
                //console.log('store_measurement fail', errMsg);
            });
    };
};

export const update_measurement = args => {
    return (dispatch, updateState) => {
        dispatch({ type: ActionTypes.SAVE_MEASUREMENT_PENDING });
        // console.log('update_measurement args', args);
        Services.update_measurementargs
            .then(resp => {
                dispatch({ type: ActionTypes.SAVE_MEASUREMENT_SUCCESS, resp });
                // console.log('update_measurement respo', resp);
                // console.log('update_measurement respo', this.state);
            })
            .catch(errMsg => {
                dispatch({
                    type: ActionTypes.SAVE_MEASUREMENT_FAIL,
                    message: errMsg
                });
                //console.log('update_measurement fail', errMsg);
            });
    };
};

export const delete_measurement = args => {
    return (dispatch, deleteState) => {
        dispatch({ type: ActionTypes.DELETE_MEASUREMENT_PENDING });
        // console.log('delete_measurement args', args);
        Services.delete_measurementargs
            .then(resp => {
                dispatch({
                    type: ActionTypes.DELETE_MEASUREMENT_SUCCESS,
                    resp
                });
                // console.log('delete_measurement respo', resp);
                // console.log('delete_measurement respo', this.state);
            })
            .catch(errMsg => {
                dispatch({
                    type: ActionTypes.DELETE_MEASUREMENT_FAIL,
                    message: errMsg
                });
                //console.log('delete_measurement fail', errMsg);
            });
    };
};
