import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Login, Register } from '../components/Login';
const Auth = () => {
	const [isLogin, setIsLogin] = useState(true);
	console.log(isLogin);
	return (
		<>
			{isLogin ? <Login /> : <Register />}

			<Button
				variant='warning'
				className='text-white  mx-3'
				onClick={(e) => setIsLogin(!isLogin)}
			>
				{isLogin ? 'Register' : 'Login'}
			</Button>
		</>
	);
};

export default Auth;
