import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Bounce } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
const options = {
	position: 'top-right',
	autoClose: 1000,
	hideProgressBar: true,
	closeOnClick: true,
	newestOnTop: false,
	pauseOnHover: false,
	draggable: false,
	rtl: false,
	theme: 'dark',
};
root.render(
	<Provider store={store}>
		<ToastContainer transition={Bounce} {...options} />

		<App />
	</Provider>
);
