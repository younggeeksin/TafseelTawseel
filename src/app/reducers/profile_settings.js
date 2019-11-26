import * as ActionTypes from '@actions/ActionTypes'
//import { REHYDRATE } from 'redux-persist';
// console.log('import { REHYDRATE } from ',REHYDRATE)
export default function base(state = {
	is_loading: true,
	is_logged_in:false,
	is_requesting: false,
	is_error: false,
	message: "",
	user:{},
}, action) {
	// console.log('Profile Setting Reducer :: ',action)
	switch (action.type) {
		case ActionTypes.UPDATE_PROFILE_PENDING:
		{
			return {
				...state,
				type: action.type,
				is_loading: true,
				is_logged_in:false,
				is_requesting: true,
				is_error: false,
				message: "",
			}
		}
		case ActionTypes.UPDATE_PROFILE_FAIL:
		{
			return {
				...state,
				type: action.type,
				is_loading: false,
				is_logged_in:false,
				is_requesting: false,
				is_error: true,
				message: action.message,
			}
		}
		case ActionTypes.UPDATE_PROFILE_SUCCESS:
		{

			return {
				...state,
				type: action.type,
				is_loading: false,
				is_logged_in:true,
				is_requesting: false,
				is_error: false,
				message: action.message,
			}
		}
		default:
			return state
	}
}
