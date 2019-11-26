import * as ActionTypes from '@actions/ActionTypes'
import {Constants} from '@common'
// import update from 'immutability-helper';

export default function base(state = {
	is_fetching:false,
	is_loading:true,
	is_error:false,
	message:'',
	measurements:[],
}, action){
	// console.log(action.products);
	switch(action.type){
		case ActionTypes.GET_MEASUREMENT_PENDING:
		{
			return {
				...state,
				type:action.type,
				is_fetching:true,
				is_loading:true,
				is_error:false,
				message:'',
				measurements:[],
			}
		}
		case ActionTypes.GET_MEASUREMENT_FAIL:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				is_loading:false,
				is_error:true,
				message:action.message,
				measurements:[],
			}
		}
		case ActionTypes.GET_MEASUREMENT_SUCCESS:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				is_loading:false,
				is_error:false,
				message:'',
				measurements:action.resp,
			}
		}
		case ActionTypes.SAVE_MEASUREMENT_PENDING:
		{
			return {
				...state,
				type:action.type,
				is_fetching:true,
				is_loading:true,
				is_error:false,
				message:'',
				measurements:[],
			}
		}
		case ActionTypes.SAVE_MEASUREMENT_FAIL:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				is_loading:false,
				is_error:true,
				message:action.message,
				//measurements:[],
			}
		}
		case ActionTypes.SAVE_MEASUREMENT_SUCCESS:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				is_loading:false,
				is_error:false,
				message:action.resp.message || action.resp,
				//measurements:action.resp,
			}
		}
		case ActionTypes.DELETE_MEASUREMENT_PENDING:
		{
			return {
				...state,
				type:action.type,
				is_fetching:true,
				is_loading:true,
				is_error:false,
				message:'',
				measurements:[],
			}
		}
		case ActionTypes.DELETE_MEASUREMENT_FAIL:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				is_loading:false,
				is_error:true,
				message:action.message,
				//measurements:[],
			}
		}
		case ActionTypes.DELETE_MEASUREMENT_SUCCESS:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				is_loading:false,
				is_error:false,
				message:action.resp.message || action.resp,
				//measurements:action.resp,
			}
		}
		default:
			return state
	}
}
