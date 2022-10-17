import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

const getLocalItems = () => {
	let list = localStorage.getItem('lists');

	if (list !== 'null') {
		return JSON.parse(localStorage.getItem('lists'));
	} else {
		return [];
	}
};

const SinglePage = () => {
	const [qty, setQty] = useState(1);
	const [alert, setAlert] = useState(false);
	const [data, setData] = useState(getLocalItems());

	const { slug } = useParams();

	const navigate = useNavigate();

	const { loading, products } = useSelector((state) => state.products);

	let product = products?.find((singleProduct) => singleProduct.slug === slug);

	const submitData = (id) => {
		const prevItem = data?.find(({ product_id }) => product_id === id);
		if (!prevItem) {
			setAlert(true);
			return setData(() => [
				...data,
				{
					total: product.price * qty,
					product_id: product.id,
					quantity: qty,
					price: product.price,
				},
			]);
		} else {
			setAlert(true);

			return setData(
				data.map((obj) => {
					const prodDetails = products.find(({ id }) => id === obj.product_id);
					if (obj.product_id === id) {
						return {
							...obj,
							quantity: parseInt(qty) + parseInt(parseInt(obj.quantity)),
							total:
								parseInt(obj.total) +
								parseInt(qty) * parseInt(parseInt(prodDetails.price)),
						};
					}
					return obj;
				})
			);
		}
	};
	console.log(data);
	useEffect(() => {
		localStorage.setItem('lists', JSON.stringify(data));
		if (alert) {
			toast.success('product added to cart successfull');
			setAlert(false);
			navigate('/');
		}
	}, [data, alert, navigate]);
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<div className='container m-5 p-5'>
						<div className='row'>
							<div className='col-6'>
								<img src={product?.img_src} width='70%' height='250px' alt='' />
							</div>
							<div className='col-6'>
								<div>
									<h2>{product?.name}</h2>
								</div>
								<div>Product Category:{product?.category}</div>
								<div>Price:Rs{product?.price}</div>
								<div>{product?.description}</div>
								<div>
									<span>Quantity: </span>
									<input
										type='number'
										name='quantity'
										min='1'
										max='100'
										value={qty}
										onChange={(e) => setQty(e.target.value)}
									/>
								</div>
								<div
									type='submit'
									className='btn btn-warning text-white m-2 px-3 me-5'
									onClick={() => {
										submitData(product?.id);
									}}
								>
									Add to cart
								</div>
							</div>{' '}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default SinglePage;
