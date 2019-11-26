import * as ActionTypes from '@actions/ActionTypes'

export default function base(state = {
    is_success:  false,
    message: ""
}, action) {
    switch (action.type) {
        case ActionTypes.INTERNAL_TOKEN_PENDING:{
            return {
                ...state,
                type: action.type,
                isRequesting: true,
                is_success:  false,
                message: ""
            }
        }
        case ActionTypes.INTERNAL_TOKEN_FAIL:{
            return {
                ...state,
                type: action.type,
                isRequesting: false,
                is_success:  false,
                message: action.message
            }
        }
        case ActionTypes.INTERNAL_TOKEN_SUCCESS:{
            return {
                ...state,
                type: action.type,
                isRequesting: false,
                is_success:  true,
                message: ""
            }
        }
        default:{
            return state
        }
    }
}
