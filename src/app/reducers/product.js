import * as ActionTypes from '@actions/ActionTypes'
import {Constants} from '@common'
import update from 'immutability-helper';

export default function base(state = {
	is_fetching:false,
	is_loading:false,
	products:[],
	message:''
}, action){
	// console.log(action.products);
	switch(action.type){
		case ActionTypes.GET_PRODUCT_PENDING:
		{
			return {
				...state,
				type:action.type,
				is_fetching:true,
				is_loading:true,
				// products:[],
				message:''
			}
		}
		case ActionTypes.GET_PRODUCT_FAIL:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				is_loading:true,
				products:[],
				message:action.message
			}
		}
		case ActionTypes.GET_PRODUCT_SUCCESS:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				is_loading:false,
				products:action.products.data,
				message:''
			}
		}
		case ActionTypes.PRODUCT_ATTRIBUTE_SELECT:
		{
			// console.log('PRODUCT_ATTRIBUTE_SELECT',action);
			return {
				...state,
				type:action.type,
				products:update(state.products, {
					0: {
						attributes: {
							[action.at_idx]:{
								options_custom:{
									$apply: (ops) => {
										return ops.map((ops,idx) => {
											return update(ops, {
												selected: {
													$set: idx === action.atop_idx ? true : false
												}
											})
										})
									}
								}
							}
						}
					}
				}),
			}

		}
		default:
			return state
	}
}
