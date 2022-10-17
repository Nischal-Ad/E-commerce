import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../redux/action/ProductAction';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckOut = () => {
	const cartData = JSON.parse(localStorage.getItem('lists'));

	const dispatch = useDispatch();

	let sum = 0;

	const navigate = useNavigate();

	const { products } = useSelector((state) => state.products);

	const user = JSON.parse(sessionStorage.getItem('userData'));
	const authorized = JSON.parse(sessionStorage.getItem('authorized'));

	const id = authorized ? user?.id : null;
	const [name, setName] = useState(authorized ? user?.name : '');
	const [email, setEmail] = useState(authorized ? user?.email : '');
	const [phoneno, setPhoneno] = useState(authorized ? user?.phoneno : '');
	const [address, setAddress] = useState(authorized ? user?.address : '');

	const order = (e) => {
		e.preventDefault();
		cartData.forEach((element) => {
			const data = {
				user_id: id,
				name: name,
				phoneno: phoneno,
				email: email,
				address: address,
				total: sum,
				product_id: element.product_id,
				quantity: element.quantity,
				price: element.price,
			};
			dispatch(addCart(data));
		});
		localStorage.removeItem('lists');
		toast.success('badai xa');
		navigate('/');
	};
	return (
		<>
			<div className='container mt-5'>
				<div className='row'>
					<div className='col-sm-6 p-2'>
						{!authorized ? (
							<>
								<div>
									<a href='/login'>Login</a>
								</div>
								OR
								<div className='mb-3 mt-3'>
									<label htmlFor='name' className='form-label'>
										User Name:
									</label>
									<input
										type='text'
										className='form-control'
										id='name'
										placeholder='Enter user name'
										name='name'
										value={name}
										required
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className='mb-3 mt-3'>
									<label htmlFor='email' className='form-label'>
										Email:
									</label>
									<input
										type='text'
										className='form-control'
										id='email'
										placeholder='Enter email'
										name='email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className='mb-3 mt-3'>
									<label htmlFor='email' className='form-label'>
										Phoneno:
									</label>
									<input
										type='text'
										className='form-control'
										id='phoneno'
										placeholder='Enter phoneno'
										name='phoneno'
										required
										value={phoneno}
										onChange={(e) => setPhoneno(e.target.value)}
									/>
								</div>
								<div className='mb-3 mt-3'>
									<label htmlFor='email' className='form-label'>
										Address:
									</label>
									<input
										type='text'
										className='form-control'
										id='address'
										placeholder='Enter address'
										name='address'
										value={address}
										required
										onChange={(e) => setAddress(e.target.value)}
									/>
								</div>
							</>
						) : (
							<div className='d-flex justify-content-center p-4 display-5'>
								Hello {user?.name} you are all ready to go !
							</div>
						)}
					</div>
					<div className='col-sm-6 bg-warning'>
						<h3 className='m-3'>Cart</h3>
						<div className='row my-3 mx-1 px-2'>
							<div className='col-5'>Name:</div>
							<div className='col-3'>Quantity:</div>
							<div className='col-2'>Price:</div>
							<div className='col-2'>Total:</div>
						</div>

						{cartData.map((orderItem, i) => {
							sum += orderItem?.total;
							const product = products.find(
								({ id }) => id === orderItem?.product_id
							);

							return (
								<div
									className='row bg-warning rounded-3 my-3 mx-1  px-2 py-2'
									key={i}
								>
									<div className='col-5'>{product?.name}</div>
									<div className='col-3'>{orderItem?.quantity}</div>
									<div className='col-2'>${orderItem?.price}</div>
									<div className='col-2'>${orderItem?.total}</div>
								</div>
							);
						})}

						<div className='row bg-warning rounded-3 my-3 mx-1  px-2 py-2'>
							<div className='col-10'>Total</div>
							<div className='col-2'>{sum}</div>
						</div>
					</div>
				</div>

				<button className='btn btn-warning text-white mb-5' onClick={order}>
					Submit
				</button>
			</div>
		</>
	);
};

export default CheckOut;
