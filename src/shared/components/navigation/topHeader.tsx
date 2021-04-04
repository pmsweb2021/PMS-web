import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';

import * as LoginActions from 'features/login/store/login.action';
import { AuthState, State, Action, LoaderState } from 'shared/interface';
import Confirm from '../confirm/confirm';
import { onConfirmMessages } from 'shared/constants/messages';
import { createLoadingSelector } from 'shared/util/utility';

interface MapStateProps extends AuthState, LoaderState { }
interface DispatchProps {
	logout: () => void;
}
interface UIState {
	isOpen: boolean;
}

class TopHeader extends React.Component<RouteComponentProps & MapStateProps & DispatchProps> {
	state: UIState = {
		isOpen: false
	};
	render() {
		if (!this.props.authData.auth) {
			return <Redirect to='/login' />
		}
		return (
			<div className='row border-bottom'>
				<nav
					className='navbar navbar-static-top'
					role='navigation' >
					<div className='navbar-header'>
						<button
							className='navbar-minimalize minimalize-styl-2 btn btn-primary'
							onClick={this.toggleSidebar} ><i className='fa fa-bars' /></button>
					</div>
					<ul className='nav navbar-top-links navbar-right'>
						<li>
							<div className='logout-btn' onClick={this.toggleModalStatus}>
								<i className='fa fa-sign-out' />
								Logout
							</div>
						</li>
					</ul>
				</nav>
				{this.state.isOpen &&
					<Confirm
						show={this.state.isOpen}
						handleClose={this.toggleModalStatus}
						handleConfirm={this.onLogout}
						loading={this.props.loading}
						message={onConfirmMessages.confirmLogout}
					/>}
			</div>
		)
	}
	toggleModalStatus = () => this.setState({ isOpen: !this.state.isOpen });
	onLogout = () => this.props.logout();
	toggleSidebar = () => document.body && document.body.classList.toggle('mini-navbar');
}

const loadingSelector = createLoadingSelector(['AUTH_LOGOUT']);
const mapStateToProps = (state: State): MapStateProps => {
	return {
		...state.auth,
		loading: loadingSelector(state)
	};
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): DispatchProps => {
	return {
		logout: () => dispatch(LoginActions.logout())
	};
}

export default connect<MapStateProps, DispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(withRouter(TopHeader));
