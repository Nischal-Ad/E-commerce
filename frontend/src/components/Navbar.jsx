import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';

export const NavbarPage = () => {
	const user = JSON.parse(sessionStorage.getItem('userData'));
	const authorized = JSON.parse(sessionStorage.getItem('authorized'));
	const navigate = useNavigate();

	const cartData = JSON.parse(localStorage.getItem('lists'));

	const logout = () => {
		sessionStorage.removeItem('userData');
		sessionStorage.removeItem('authorized');
		window.location.reload();
		navigate('/');
	};

	return (
		<Navbar bg='warning' variant='warning' my='0' p='0'>
			<Container>
				<Navbar.Brand className='mx-5'>
					<Link to={'/'}>
						<img
							src={process.env.PUBLIC_URL + '/download.png'}
							alt=''
							height='50px'
							width='70px'
						/>
					</Link>
				</Navbar.Brand>
				<Nav className='me-auto'>
					<Link className='nav-link active' to={'/'}>
						Home
					</Link>
					<Link className='nav-link active' to={'/Products'}>
						Products
					</Link>
					<Link className='nav-link active' to={'/Products/cart'}>
						Cart{' '}
						<span className='rounded-circle bg-light px-2 '>
							{cartData ? cartData?.length : '0'}{' '}
						</span>
					</Link>
					{authorized ? (
						<>
							<Link className='nav-link active'>{user?.name}</Link>
							<Link className='nav-link active' onClick={logout}>
								Logout
							</Link>
						</>
					) : (
						<Link className='nav-link active' to={'/login'}>
							Login
						</Link>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};

export const Footer = () => {
	return (
		<div className='d-flex justify-content-between p-5'>
			<div className=''>
				<Link to={'/'}>
					{' '}
					<img
						src={process.env.PUBLIC_URL + '/download.png'}
						alt=''
						className=''
						height='90px'
						width='90px'
					/>
				</Link>
				<h4>Contact</h4>
				<p>
					<strong>Address: </strong>NewRoad, Mahabaudha, Planchok Bhagbati Store
				</p>
				<p>
					<strong>Phone: </strong> +014158602, 9841319037
				</p>
				<p>
					<strong>Hours:</strong>8:00-5:00, Sunday-Friday
				</p>
				<div className=''>
					<h4>Follow Us</h4>
					<div className=''>
						<i className='fab fa-facebook-f'></i>
						<i className='fab fa-twitter'></i>
						<i className='fab fa-instagram'></i>
						<i className='fab fa-whatsapp'></i>
					</div>
				</div>
			</div>
			<div className=' d-flex flex-column'>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Link className='nav-link text-dark'>About</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link text-dark'>Delivery Information</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link text-dark'>Privacy Policy</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link text-dark'>Teams & Conditions</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link text-dark'>Contact Us</Link>
					</li>
				</ul>
			</div>

			<div className=' d-flex flex-column'>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Link className='nav-link text-dark text-dark'>My Account</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link text-dark'>Sign In</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link text-dark'>View Cart</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link text-dark'>Privacy Policy</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link text-dark'>Track My Order</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link text-dark'>Help</Link>
					</li>
				</ul>
			</div>
			<div>
				<h4>Install App</h4>
				<p>From Google Play store</p>
				<div className='row'>
					{/* <img src='./goo.png' height='90px' width='150px' /> */}
				</div>
				<p>Secured Payment Gateways</p>
				<div>
					<img src='./ss.jpg' alt='' width='150px' />
				</div>
			</div>
		</div>
	);
};
