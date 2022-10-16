import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const options = {
	position: 'top-right',
	autoClose: 1000,
	limit: 1,
	hideProgressBar: true,
	closeOnClick: true,
	newestOnTop: false,
	pauseOnFocusLoss: false,
	pauseOnHover: false,
	draggable: false,
	rtl: false,
	theme: 'dark',
};
root.render(
	<Provider store={store}>
		<App />
		<ToastContainer transition={Zoom} {...options} />
	</Provider>
);
