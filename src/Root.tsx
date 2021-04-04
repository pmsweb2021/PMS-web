import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './shared/components/errorBoundary/errorBoundary';
import App from './App';
import store from './store';
import WithErrorHandler from 'shared/hoc/withErrorHandler';

const Root: React.FC = props => {
	return (
		<Provider store={store}>
			<ErrorBoundary>
				<WithErrorHandler>
					<BrowserRouter>
						<App {...props} />
					</BrowserRouter>
				</WithErrorHandler>
			</ErrorBoundary>
		</Provider>
	);
};

export default Root;
