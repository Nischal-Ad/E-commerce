import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const getLocalItems = () => {
	let list = localStorage.getItem('lists');

	if (list !== 'undefined') {
		return JSON.parse(localStorage.getItem('lists'));
	} else {
		return [];
	}
};

const Cart = () => {
	const { products } = useSelector((state) => state.products);

	const [data, setData] = useState(getLocalItems());

	const cartData = JSON.parse(localStorage.getItem('lists'));

	const removeItem = (id) => {
		const delCart = data?.find(({ product_id }) => product_id === id);

		const findIndex = data?.indexOf(delCart);
		data.splice(findIndex, 1);
		return setData([...data]);
	};
	useEffect(() => {
		localStorage.setItem('lists', JSON.stringify(data));
	}, [data]);
	const navigate = useNavigate();
	const nav = () => {
		navigate('/products');
	};
	return (
		<>
			{!cartData ? (
				<div className='d-flex justify-content-center p-4 display-5'>
					No Any Items On Cart ! <br />
					<button className='btn btn-warning text-white mx-3' onClick={nav}>
						Go Back To Products Page
					</button>
				</div>
			) : (
				<>
					<div className='container my-5'>
						<h1>Your Cart</h1>
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>Name</th>
									<th scope='col'>Category</th>
									<th scope='col'>Quantity</th>
									<th scope='col'>Price per piece</th>
									<th scope='col'>Total price</th>
									<th scope='col'>Delete All</th>
								</tr>
							</thead>
							<tbody>
								{cartData?.map((orderItem, i) => {
									let productData = products.find(
										({ id }) => id === orderItem.product_id
									);

									return (
										<tr key={i}>
											<td>{productData?.name}</td>
											<td>{productData?.category}</td>
											<td>{orderItem?.quantity}</td>
											<td>{orderItem?.price}</td>
											<td>{orderItem.price * orderItem.quantity}</td>
											<td>
												<button
													className='btn btn-warning mb-2 text-white'
													onClick={() => removeItem(orderItem?.product_id)}
												>
													Delete
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						<Link
							className={` btn btn-warning text-white mb-2 ${
								data.length === 0 && 'disabled'
							}`}
							to={'/products/checkout'}
						>
							Proceed
						</Link>
					</div>
				</>
			)}
		</>
	);
};

export default Cart;
