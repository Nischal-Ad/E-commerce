import Spinner from 'react-bootstrap/Spinner';

function Loading() {
	return (
		<div
			className='d-flex align-items-center justify-content-center'
			style={{ height: '98vh' }}
		>
			<Spinner className='' animation='border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		</div>
	);
}

export default Loading;
