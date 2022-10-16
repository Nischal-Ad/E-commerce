import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('getAllProducts', async () => {
	try {
		const response = await axios.get(`http://127.0.0.1:8000/api/data`);
		return response.data;
	} catch (error) {
		return error.message;
	}
});

export const loginUser = createAsyncThunk('loginUser', async (data) => {
	const { email, password } = data;
	try {
		const config = { headers: { 'Content-Type': 'application/json' } };
		const response = await axios.post(
			`http://127.0.0.1:8000/api/login`,
			{
				email: email,
				password: password,
			},
			config
		);

		return response.data;
	} catch (error) {
		return error.message;
	}
});

export const registerUser = createAsyncThunk('registerUser', async (data) => {
	const { email, password, name, confirm_password, phoneno, address } = data;
	try {
		const config = { headers: { 'Content-Type': 'application/json' } };
		const response = await axios.post(
			`http://127.0.0.1:8000/api/register`,
			{
				name: name,
				email: email,
				password: password,
				confirm_password: confirm_password,
				address: address,
				phoneno: phoneno,
			},
			config
		);
		return response.data;
	} catch (error) {
		return 'ea bandhu k ho para yesto same email rekhna ta milanani hou';
	}
});

export const addCart = createAsyncThunk('addCart', async (data) => {
	const {
		user_id,
		name,
		phoneno,
		email,
		address,
		total,
		product_id,
		quantity,
		price,
	} = data;
	try {
		const config = { headers: { 'Content-Type': 'application/json' } };
		const response = await axios.post(
			`http://127.0.0.1:8000/api/submit`,
			{
				user_id: user_id,
				name: name,
				phoneno: phoneno,
				email: email,
				address: address,
				total: total,
				orderItems: {
					product_id: product_id,
					quantity: quantity,
					price: price,
				},
			},
			config
		);
		return response.data;
	} catch (error) {
		return error.message;
	}
});
