import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoggedIn = () => {
	const authorized = JSON.parse(sessionStorage.getItem('authorized'));

	const navigate = useNavigate();

	useEffect(() => {
		if (authorized) {
			toast.success('logged in');
			navigate('/');
		}
	});
	return (
		<div className='d-flex justify-content-center p-4 display-5'>
			You are already logged in ! <br />
			<button className='btn btn-warning text-white mx-3'>
				Go Back To Home Page
			</button>
		</div>
	);
};

export default LoggedIn;
