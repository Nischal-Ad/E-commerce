import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../redux/action/ProductAction';

export const Login = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = (e) => {
		e.preventDefault();
		const data = {
			email: email,
			password: password,
		};
		dispatch(loginUser(data));
	};

	return (
		<>
			<div className='d-flex justify-content-center p-4 display-5'>Login</div>
			<div className='container w-50 my-5'>
				<div className='mb-3 mt-3'>
					<label htmlFor='email' className='form-label'>
						Email:
					</label>
					<input
						type='email'
						className='form-control'
						id='email'
						placeholder='Enter email'
						name='email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='password' className='form-label'>
						Password:
					</label>
					<input
						type='password'
						className='form-control'
						id='password'
						placeholder='Enter password'
						name='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className='btn btn-warning text-white mx-3' onClick={login}>
					Submit
				</button>
			</div>
		</>
	);
};

export const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [phoneno, setPhoneno] = useState('');
	const [password, setPassword] = useState('');
	const [confirm_password, setConfirm_Password] = useState('');

	const register = (e) => {
		e.preventDefault();
		const data = {
			name: name,
			email: email,
			password: password,
			confirm_password: confirm_password,
			phoneno: phoneno,
			address: address,
		};
		dispatch(registerUser(data));
		navigate('/');
	};
	return (
		<>
			{' '}
			<div className='d-flex justify-content-center p-4 display-5'>
				Register
			</div>
			<div>
				<div className='container w-50 my-2 p-0'>
					<Form onSubmit={register}>
						<Form.Group className='mb-3' controlId='formGroupName'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								placeholder='Enter your name'
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formGroupEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								placeholder='Enter email'
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formGroupAddress'>
							<Form.Label>Address</Form.Label>
							<Form.Control
								type='text'
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								required
								placeholder='Enter your address'
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formGroupPhone'>
							<Form.Label>Phone no</Form.Label>
							<Form.Control
								type='phone'
								value={phoneno}
								onChange={(e) => setPhoneno(e.target.value)}
								required
								placeholder='Enter your phone'
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formGroupPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								placeholder='Password'
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formGroupPassword'>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type='password'
								value={confirm_password}
								onChange={(e) => setConfirm_Password(e.target.value)}
								required
								placeholder='Password'
							/>
						</Form.Group>

						<Button
							variant='warning'
							type='submit'
							className='text-white  mx-3'
						>
							Submit
						</Button>
					</Form>
				</div>
			</div>
		</>
	);
};
