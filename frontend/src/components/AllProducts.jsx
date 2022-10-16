import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
	const navigate = useNavigate();

	const { loading, products } = useSelector((state) => state.products);

	const productDetails = products.map((product, i) => {
		const getProductDetails = () => {
			navigate(`/products/${product.slug}`);
		};
		return (
			<React.Fragment key={i}>
				<div className='card col-sm-4 m-3 border-0 w-25'>
					<img
						className='card-img-top rounded-5'
						src={product.img_src}
						width='200px'
						height='230px'
						alt='Card product'
					/>
					<div className='card-body p-2 d-flex flex-column align-items-center text-center'>
						<h5 className='card-title mt-2'>{product.name}</h5>
						<p className='card-text mt-2 mb-3'>Price : ${product.price}</p>
						<button
							className='btn btn-warning text-white align-center'
							onClick={getProductDetails}
						>
							View details
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	});
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<div className='d-flex justify-content-center p-4 display-5'>
						All products
					</div>
					<div className='d-flex flex-wrap mx-5 my-4 justify-content-between'>
						{productDetails}
					</div>
				</>
			)}
		</>
	);
};

export const FeatureProducts = () => {
	const navigate = useNavigate();

	const { loading, products } = useSelector((state) => state.products);

	const productDetails = products.slice(0, 6).map((product, i) => {
		const getProductDetails = () => {
			navigate(`/products/${product.slug}`);
		};
		return (
			<React.Fragment key={i}>
				<div key={i} className='card col-sm-4 m-3 border-0 w-25'>
					<img
						className='card-img-top rounded-5'
						src={product.img_src}
						width='200px'
						height='230px'
						alt='Card product'
					/>
					<div className='card-body p-2 d-flex flex-column align-items-center text-center'>
						<h5 className='card-title mt-2'>{product.name}</h5>
						<p className='card-text mt-2 mb-3'>Price : ${product.price}</p>
						<button
							className='btn btn-warning text-white align-center'
							onClick={getProductDetails}
						>
							View details
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	});
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<div className='m-0 p-0'>
						<img src='/new-banner2.jpg' alt='' width='100%' />
					</div>
					<div className='d-flex justify-content-center p-4 display-5'>
						<span>Featured Product</span>
					</div>
					<div className='d-flex flex-wrap mx-5 my-4 justify-content-between'>
						{productDetails}
					</div>
				</>
			)}
		</>
	);
};

export default AllProducts;
