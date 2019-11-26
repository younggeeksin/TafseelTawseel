import * as ActionTypes from '@actions/ActionTypes'
import {Constants} from '@common'

export default function base(state = {
	is_fetching:false,
	limit:Constants.Api.Limit,
	is_more:false,
	offset:0,
	products:[],
	message:''
}, action){
	// console.log(action.products);
	switch(action.type){
		case ActionTypes.GET_PRODUCTS_PENDING:
		{
			return {
				...state,
				type:action.type,
				is_fetching:true,
				message:''
			}
		}
		case ActionTypes.GET_PRODUCTS_FAIL:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				message:action.message
			}
		}
		case ActionTypes.GET_PRODUCTS_SUCCESS:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				is_more:action.products.data.length < action.products.total,
				products:action.products.data,
				message:''
			}
		}
		case ActionTypes.GET_PRODUCTS_MORE:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				is_more:action.products.data.length == action.products.total,
				products:state.products.concat(action.products.data),
				message:''
			}
		}
		default:
			return state
	}
}
