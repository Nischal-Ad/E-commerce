import { configureStore } from '@reduxjs/toolkit';
import {
	getAllProduct,
	getCart,
	getLoginUser,
	getregisterUser,
} from './redux/reducer/productReducer';

const store = configureStore({
	reducer: {
		products: getAllProduct,
		loginUser: getLoginUser,
		registerUser: getregisterUser,
		addCart: getCart,
	},
});

export default store;
