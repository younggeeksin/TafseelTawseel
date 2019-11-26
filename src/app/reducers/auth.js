import * as ActionTypes from '@actions/ActionTypes'

export default function base(state = {
    is_loading: true,
    is_requesting: false,
    message: "",
    user:{},
}, action) {
    switch (action.type) {
        case ActionTypes.GET_ADMIN_TOKEN_PENDING:
        case ActionTypes.GET_CUSTOMER_INFO_PENDING:
            {
                return {
                    ...state,
                    type: action.type,
                    isRequesting: true,
                    message: ""
                }
            }
        case ActionTypes.GET_ADMIN_TOKEN_FAIL:
        case ActionTypes.GET_CUSTOMER_INFO_FAIL:
            {
                return {
                    ...state,
                    type: action.type,
                    isRequesting: false,
                    message: action.message
                }
            }
        case ActionTypes.GET_ADMIN_TOKEN_SUCCESS:
            {
                return {
                    ...state,
                    type: action.type,
                    isRequesting: false,
                    message: ""
                }
            }
        case ActionTypes.GET_CUSTOMER_INFO_SUCCESS:
            {
                return {
                    ...state,
                    type: action.type,
                    isRequesting: false,
                    message: "",
                    customerInfo: action.customerInfo
                }
            }
        case ActionTypes.SET_MY_ADDRESS:
            {
                let myAddresses = state.myAddresses.map((item) => {
                    if (item.id == action.myAddress.id) {
                        item.isDefault = true
                    } else {
                        item.isDefault = false
                    }
                    return item
                })
                return {
                    ...state,
                    myAddresses: myAddresses
                }
            }
        case ActionTypes.ADD_MY_ADDRESS:
            {
                let item = action.address
                let check = (state.myAddresses && state.myAddresses.length > 0)
                item.isDefault = check ? false : true
                let add = check ? state.myAddresses.concat(item) : [item]
                return {
                    ...state,
                    myAddresses: add
                }
            }
        case ActionTypes.REMEMBER_LOGIN:
            {
                return {
                    ...state,
                    type: action.type,
                    loginData: action.loginData
                }
            }
        default:
            return state
    }
}
