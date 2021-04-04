import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-table/react-table.css';
import 'assets/styles/datatables.min.css';
import './assets/styles/index.scss';

import Layout from 'shared/hoc/layout/component/layout.component';
import AuthService from 'shared/services/auth.service';
import Spinner from 'shared/components/spinner/spinner';

// import containers, for which lazy loading is not needed, as they will be rendered for all users
import NotFound from 'shared/components/404/404';
import Login from 'features/login/container/login.container';

/*
* import async components in order to lazy load the containers, which will be rendered conditionally
* based on the permissions user is having
*/
import * as asyncComponents from 'shared/hoc/asyncComponents';

const App: React.FC = () => {
	const isLoggedIn = AuthService.checkLogin();
	const isSuperAdmin = AuthService.checkSuperAdmin();

	if (isLoggedIn) {
		return (
			<Layout>
				<Suspense fallback={<Spinner />}>
					<Switch>
						<Route exact path='/coustomer-detail' component={asyncComponents.CoustomerDetail} />


						
						<Route exact path='/events' component={asyncComponents.Events} />
						<Route exact path='/event/:id' component={asyncComponents.EventDetail} />

						<Route exact path='/payment' component={asyncComponents.Payment} />

						<Route exact path='/' component={asyncComponents.MediaList} />
						<Route exact path='/media/add' component={asyncComponents.MediaForm} />

						<Route exact path='/poll' component={asyncComponents.PollList} />
						<Route exact path='/poll/add' component={asyncComponents.PollForm} />

						<Route exact path='/star-challenge' component={asyncComponents.StarChallenge} />
						<Route exact path='/404' component={NotFound} />

						{isSuperAdmin && (
							<Switch>
								<Route exact path='/users' component={asyncComponents.Users} />
								<Redirect to='/events' />
							</Switch>
						)}
						<Redirect to='/404' />
					</Switch>
				</Suspense>
			</Layout>
		);
	} else {
		// lazy loading not needed for login, forget password, reset password APIs
		return (
			<Switch>
				<Route path='/login' component={Login} />
				<Redirect to='/login' />
			</Switch>
		);
	}
};

export default App;
