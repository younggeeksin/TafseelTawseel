import { persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/es/storage';
import AsyncStorage from '@react-native-community/async-storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


import internalReducers from './internal';
import authReducers from './auth';
import categoriesReducers from './categories';
import productsReducers from './products';
import productsByCategoryReducers from './productsByCategory';
import cartsReducers from './carts';
import settingsReducers from './settings';
import tagsReducers from './tags';
import vendorReducers from './vendor';
import vendorListReducers from './vendor_list';
import vendorCategoriesReducers from './vendor_categories';
import productReducers from './product';
import productCompositeReducers from './product_composite';
import signUpReducers from './sign_up';
import signInReducers from './sign_in';
import measurementReducers from './measurement';
import profileSettingsReducers from './profile_settings';

const config = {
	key: 'root',
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel2,
	whitelist: [
		'settingsReducers',
		'signInReducers',
	//		 'categoriesReducers',
	//		 'cartsReducers',
	//		 'authReducers',
	//		 "productsReducers",
	//		 'internalReducers',
	//		 'vendorListReducers',
	//		 'vendorCategoriesReducers',
	//		 'productsByCategoryReducers'
	]
}

const reducers = persistCombineReducers(config, {
	internalReducers,
	authReducers,
	categoriesReducers,
	productsReducers,
	productsByCategoryReducers,
	cartsReducers,
	settingsReducers,
	tagsReducers,
	vendorReducers,
	vendorListReducers,
	vendorCategoriesReducers,
	productReducers,
	productCompositeReducers,
	signUpReducers,
	signInReducers,
	measurementReducers,
	profileSettingsReducers,
})

export default reducers
