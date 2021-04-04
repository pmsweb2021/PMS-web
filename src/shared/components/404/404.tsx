import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import { firstLevelBreadcrumbs } from 'shared/constants/constants';

const NotFound: React.FC = () => {
	return (
		<>
			<Header title='404' data={firstLevelBreadcrumbs} />
			<div className='middle-box text-center animated fadeInDown'>
				<h1>404</h1>
				<h3 className='font-bold'>
					Page Not Found
				</h3>

				<div className='error-desc'>
					Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button on your browser or try found something else in our app
					<form className='form-inline m-t'>
						<Link to='/'>
							<button type='submit' className='btn btn-primary'>
								Home
							</button>
						</Link>
					</form>
				</div>
			</div>
		</>
	)
}

export default NotFound;
