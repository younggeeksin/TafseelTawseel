import * as ActionTypes from '@actions/ActionTypes'


export default function base(state = {
    loading:true,
    message: "",
    is_error: false,
    vendor:[]
}, action) {
    switch (action.type) {
        case ActionTypes.GET_VENDORS_LIST_PENDING:{
            return {
                ...state,
                type: action.type,
                loading:true,
                message: "",
                is_error: false,
                vendor:[]
            }
        }
        case ActionTypes.GET_VENDORS_LIST_SUCCESS:{
            return {
                ...state,
                type: action.type,
                loading:false,
                message: "",
                is_error: false,
                vendors: action.vendors
            }
        }
        case ActionTypes.GET_VENDORS_LIST_FAIL:{
            return {
                ...state,
                type: action.type,
                loading:false,
                message: action.message,
                is_error: true,
                vendor:[]
            }
        }
        default:{
            return state
        }
    }
}
