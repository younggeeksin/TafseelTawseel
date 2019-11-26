import * as ActionTypes from './ActionTypes';
import * as Services from '@services';

export const get_product = args => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.GET_PRODUCT_PENDING });
        // console.log('get_product args', args);
        Services.get_products(args)
            .then(products => {
                dispatch({ type: ActionTypes.GET_PRODUCT_SUCCESS, products });
                //console.log('get_product respo', products);
                // console.log('get_product respo', this.state);
            })
            .catch(errMsg => {
                dispatch({
                    type: ActionTypes.GET_PRODUCT_FAIL,
                    message: errMsg
                });
                //console.log('get_product fail', errMsg);
            });
    };
};

export const get_product_composite = args => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.GET_PRODUCT_COMPOSITE_PENDING });
        // console.log('get_product_composite args', args);
        Services.get_product_composite(args)
            .then(resp => {
                dispatch({
                    type: ActionTypes.GET_PRODUCT_COMPOSITE_SUCCESS,
                    resp
                });
            })
            .catch(errMsg => {
                dispatch({
                    type: ActionTypes.GET_PRODUCT_COMPOSITE_FAIL,
                    message: errMsg
                });
            });
    };
};

export const attribute_option_select = (a, o) => {
    return (dispatch, getState) => {
        dispatch({
            type: ActionTypes.PRODUCT_ATTRIBUTE_SELECT,
            at_idx: a,
            atop_idx: o
        });
    };
};

export const composite_option_select = (a, b) => {
    return (dispatch, getState) => {
        dispatch({
            type: ActionTypes.PRODUCT_COMPOSITE_OPTION_SELECT,
            comp_index: a,
            comp_opt_index: b
        });
    };
};

export const get_products = args => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.GET_PRODUCTS_PENDING });
        Services.get_products(args)
            .then(products => {
                //if (args.offset == 0) {
                dispatch({ type: ActionTypes.GET_PRODUCTS_SUCCESS, products });
                //}
                //else {
                //    dispatch({ type: ActionTypes.GET_PRODUCTS_MORE, products })
                //}
            })
            .catch(errMsg => {
                dispatch({
                    type: ActionTypes.GET_PRODUCTS_FAIL,
                    message: errMsg
                });
            });
    };
};
