import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoggedIn = () => {
	const navigate = useNavigate();
	const nav = () => {
		navigate('/');
	};
	return (
		<div className='d-flex justify-content-center p-4 display-5'>
			You are already logged in ! <br />
			<button className='btn btn-warning text-white mx-3' onClick={nav}>
				Go Back To Home Page
			</button>
		</div>
	);
};

export default LoggedIn;
