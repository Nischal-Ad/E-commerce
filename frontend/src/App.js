import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import {
	getProducts,
	loginUser,
	registerUser,
	addCart,
} from './redux/action/ProductAction';
import Home from './pages/Home';
import SinglePage from './pages/SinglePage';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import { Footer, NavbarPage } from './components/Navbar';
import AllProducts from './components/AllProducts';
import Auth from './pages/Auth';
import LoggedIn from './components/LoggedIn';

export const App = () => {
	const { user, authorized } = useSelector((state) => state.loginUser);

	useEffect(() => {
		store.dispatch(getProducts());
	}, []);
	if (authorized) {
		sessionStorage.setItem('userData', JSON.stringify(user));
		sessionStorage.setItem('authorized', JSON.stringify(authorized));
	}
	const auth = JSON.parse(sessionStorage.getItem('authorized'));

	return (
		<>
			<BrowserRouter>
				<NavbarPage />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/products/:slug' element={<SinglePage />} />
					<Route exact path='/products' element={<AllProducts />} />
					<Route exact path='/products/cart' element={<Cart />} />
					<Route exact path='/products/checkout' element={<CheckOut />} />
					<Route
						exact
						path='/login'
						element={!auth ? <Auth /> : <LoggedIn />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};
export const ProductsAndDetails = () => {
	const dispatch = useDispatch();

	const { loading, products } = useSelector((state) => state.products);

	const productDetails = products.map((product, i) => {
		const getProductDetails = () => {
			product = products.find(({ slug }) => slug === product.slug);
			console.log(product);
		};
		return (
			<button key={i} onClick={getProductDetails}>
				{product.slug}
			</button>
		);
	});

	console.log(loading);
	console.log(products);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return <>{loading ? 'loading' : <>{productDetails}</>}</>;
};

export const Register = () => {
	const dispatch = useDispatch();

	const { loading, user } = useSelector((state) => state.loginUser);
	console.log(user);
	const submitData = (e) => {
		e.preventDefault();
		const data = {
			name: 'nischal',
			email: 'nis@gmail.com',
			password: '11111111',
			confirm_password: '11111111',
			phoneno: '1234567890',
			address: 'jhapa',
		};
		dispatch(loginUser(data));
	};

	const register = (e) => {
		e.preventDefault();
		const data = {
			name: 'nischal',
			email: 'nis@gmail.com',
			password: '11111111',
			confirm_password: '11111111',
			phoneno: '1234567890',
			address: 'jhapa',
		};
		dispatch(registerUser(data));
	};
	return (
		<>
			{loading ? (
				'loading'
			) : (
				<>
					{/* {user.name} */}
					<button onClick={submitData}>submit</button>
					<button onClick={register}>registerUser</button>
				</>
			)}
		</>
	);
};

export const AddCart = () => {
	const dispatch = useDispatch();

	const { loading, cart } = useSelector((state) => state.loginUser);
	console.log(cart);
	const submitData = (e) => {
		e.preventDefault();
		const data = {
			user_id: '1',
			name: 'nischal',
			phoneno: '1111111111',
			email: 'aanchal@gmail.com',
			address: 'bkt',
			total: '1000',
			order_id: '26',
			product_id: '26',
			quantity: '26',
			price: '1000',
		};
		dispatch(addCart(data));
	};

	return (
		<>
			{loading ? (
				'loading'
			) : (
				<>
					{/* {user.name} */}
					<button onClick={submitData}>Add Cart</button>
				</>
			)}
		</>
	);
};
