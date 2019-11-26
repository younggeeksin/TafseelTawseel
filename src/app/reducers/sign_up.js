import * as ActionTypes from '@actions/ActionTypes'

export default function base(state = {
	is_loading: true,
	is_requesting: false,
	is_error: false,
	message: "",
}, action) {
	//console.log('SignUpReducers :: ',action)
	switch (action.type) {
		case ActionTypes.SIGN_UP_PENDING:
		{
			return {
				...state,
				type: action.type,
				is_loading: true,
				is_requesting: true,
				is_error: false,
				message: "",
			}
		}
		case ActionTypes.SIGN_UP_FAIL:
		{
			return {
				...state,
				type: action.type,
				is_loading: false,
				is_requesting: false,
				is_error: true,
				message: action.message,
			}
		}
		case ActionTypes.SIGN_UP_SUCCESS:
		{
			return {
				...state,
				type: action.type,
				is_loading: false,
				is_requesting: false,
				is_error: false,
				message: action.resp.message,
			}
		}
		default:
			return state
	}
}
