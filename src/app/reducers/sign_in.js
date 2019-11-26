import * as ActionTypes from '@actions/ActionTypes'
import { REHYDRATE } from 'redux-persist';
// console.log('import { REHYDRATE } from ',REHYDRATE)
export default function base(state = {
	is_loading: true,
	is_logged_in:false,
	is_requesting: false,
	is_error: false,
	message: "",
	user:{},
}, action) {
	// console.log('SignInReducers :: ',action)
	switch (action.type) {
		case ActionTypes.SIGN_IN_PENDING:
		{
			return {
				...state,
				type: action.type,
				is_loading: true,
				is_logged_in:false,
				is_requesting: true,
				is_error: false,
				message: "",
				user:{},
			}
		}
		case ActionTypes.SIGN_IN_FAIL:
		{
			return {
				...state,
				type: action.type,
				is_loading: false,
				is_logged_in:false,
				is_requesting: false,
				is_error: true,
				message: action.message,
				user:{},
			}
		}
		case ActionTypes.SIGN_IN_SUCCESS:
		{

			return {
				...state,
				type: action.type,
				is_loading: false,
				is_logged_in:true,
				is_requesting: false,
				is_error: false,
				user: action.resp,
			}
		}
		case ActionTypes.PROFILE_UPDATED:
		{
			return {
				...state,
				user: {
					...state.user,
					...action.resp
				},
			}
		}
		case ActionTypes.SIGN_OUT:
		{
			return {
				...state,
				type: action.type,
				is_loading: false,
				is_logged_in:false,
				is_requesting: false,
				is_error: false,
				message: "",
				user:{},
			}
		}
		case REHYDRATE:{
			global.internal_token = "";
			//console.log('REHYDRATE, reached here 1 :: ', REHYDRATE)

			if(action.payload && action.payload.signInReducers.user){
				//console.log('REHYDRATE, reached here 2 :: ', action.payload.signInReducers.user)
				if(action.payload.signInReducers.is_logged_in){
					global.internal_token = action.payload.signInReducers.user.token;
				}
			}
		}
		default:
			return state
	}
}
