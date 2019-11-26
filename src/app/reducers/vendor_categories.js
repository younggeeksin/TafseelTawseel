import * as ActionTypes from '@actions/ActionTypes'


export default function base(state = {
    loading:true,
    message: "",
    is_error:false,
    categories:[],
    thobe_product:{},
}, action) {
    switch (action.type) {
        case ActionTypes.GET_VENDOR_CATEGORIES_PENDING:{
            return {
                ...state,
                type: action.type,
                loading:true,
                message: "",
                is_error:false,
                categories:[],
                thobe_product:{},
            }
        }
        case ActionTypes.GET_VENDOR_CATEGORIES_SUCCESS:{
            return {
                ...state,
                type: action.type,
                loading:false,
                message: "",
                is_error:false,
                categories: action.resp.categories,
                thobe_product:action.resp.thobe_product || {},
            }
        }
        case ActionTypes.GET_VENDOR_CATEGORIES_FAIL:{
            return {
                ...state,
                type: action.type,
                loading:false,
                message: action.message,
                is_error:true,
                categories:[],
                thobe_product:{},
            }
        }
        default:{
            return state
        }
    }
}
