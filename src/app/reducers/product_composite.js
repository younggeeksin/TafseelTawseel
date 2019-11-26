import * as ActionTypes from '@actions/ActionTypes'
import { Constants } from '@common'
import update from 'immutability-helper';

export default function base(state = {
	is_fetching:false,
	is_loading:true,
	product:{},
	message:''
}, action){
	// console.log(action.product);
	switch(action.type){
		case ActionTypes.GET_PRODUCT_COMPOSITE_PENDING:
		{
			return {
				...state,
				type:action.type,
				is_fetching:true,
				is_loading:true,
				// product:{},
				message:''
			}
		}
		case ActionTypes.GET_PRODUCT_COMPOSITE_FAIL:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				is_loading:true,
				product:{},
				message:action.message
			}
		}
		case ActionTypes.GET_PRODUCT_COMPOSITE_SUCCESS:
		{
			return {
				...state,
				type:action.type,
				is_fetching:false,
				is_loading:false,
				product:action.resp,
				message:''
			}
		}
		case ActionTypes.PRODUCT_COMPOSITE_OPTION_SELECT:
		{
			console.log('PRODUCT_COMPOSITE_OPTION_SELECT',action);
			return {
				...state,
				type:action.type,
				product:update(state.product, {
					composite_components: {
						[action.comp_index]:{
							component_products:{
								$apply: (ops) => {
									return ops.map((ops,i) => {
										return update(ops, {
											selected: {
												$set: i === action.comp_opt_index ? true : false
											}
										})
									})
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
