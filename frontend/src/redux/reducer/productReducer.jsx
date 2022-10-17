import { getProducts, loginUser, registerUser } from '../action/ProductAction';
import { createReducer } from '@reduxjs/toolkit';

export const getAllProduct = createReducer(
	{ products: [], loading: false },
	{
		[getProducts.pending]: (state, action) => {
			state.loading = true;
		},
		[getProducts.fulfilled]: (state, action) => {
			state.loading = false;
			state.products = action.payload;
		},
		[getProducts.rejected]: (state, action) => {
			state.loading = false;
		},
	}
);

export const getLoginUser = createReducer(
	{ user: {}, loading: false },
	{
		[loginUser.pending]: (state, action) => {
			state.loading = true;
			state.authorized = false;
		},
		[loginUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload.user;
			state.authorized = action.payload.authorized;
			state.message = action.payload.message;
			state.error = action.payload.error;
		},
		[loginUser.rejected]: (state, action) => {
			state.loading = false;
			state.authorized = false;
		},
	}
);

export const getregisterUser = createReducer(
	{ user: {}, loading: false },
	{
		[registerUser.pending]: (state, action) => {
			state.loading = true;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
			state.error = action.payload.error;
			state.create = action.payload.create;
		},
		[registerUser.rejected]: (state, action) => {
			state.loading = false;
		},
	}
);

export const getCart = createReducer(
	{ cart: [], loading: false },
	{
		[registerUser.pending]: (state, action) => {
			state.loading = true;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.cart = action.payload;
		},
		[registerUser.rejected]: (state, action) => {
			state.loading = false;
		},
	}
);
