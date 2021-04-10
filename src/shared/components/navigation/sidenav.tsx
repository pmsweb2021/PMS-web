import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps, Redirect, withRouter } from 'react-router-dom';
import NavItem from './navItem';
import { State, Action } from 'shared/interface';
import { createAction } from 'shared/util/utility';
import * as actionTypes from 'store/action-types';
import * as ProfileActions from 'features/login/store/login.action';

interface DispatchProps {
	renderSideNav: () => void;
	getProfile: () => void;
}
interface UIState {
	openStatus: {
		[key: string]: boolean;
	};
}
interface OwnProps extends RouteComponentProps, State, DispatchProps { }

class SideNav extends PureComponent<OwnProps> {
	state: UIState = {
		openStatus: {}
	};

	render() {
		// if (!this.props.auth.authData.auth) {
		// 	return <Redirect to='/login' />;
		// }
		return (
			<nav className='navbar-default navbar-static-side' role='navigation'>
				<ul className='nav' id='side-menu'>
					<li className='nav-header cursor-pointer'>
						<h3 className='profile-element'>
							PMS Admin
						</h3>
						<div className='logo-element'>PMS</div>
					</li>

					<NavItem
						isOpen={this.state.openStatus.Events || false}
						toggleIsOpen={this.toggleIsOpen}
						key={'Customer-detail'}
						renderSideNav={this.props.renderSideNav}
						menu={{ name: 'Customer Detail', route: '/customer-detail', icon: 'users' }}
					/>
					<NavItem
						isOpen={this.state.openStatus.Events || false}
						toggleIsOpen={this.toggleIsOpen}
						key={'Company-detail'}
						renderSideNav={this.props.renderSideNav}
						menu={{ name: 'Company Detail', route: '/company-detail', icon: 'building' }}
					/>
					<NavItem
						isOpen={this.state.openStatus.Events || false}
						toggleIsOpen={this.toggleIsOpen}
						key={'Policy-detail'}
						renderSideNav={this.props.renderSideNav}
						menu={{ name: 'Policy Detail', route: '/policy-detail', icon: 'document' }}
					/>
				</ul>
			</nav>
		);
	}
	toggleIsOpen = (name: string) => {
		if (this.state.openStatus[name]) {
			this.setState({
				openStatus: {}
			});
		} else {
			this.setState({
				openStatus: {
					[name]: true
				}
			});
		}
	}
}

const mapStateToProps = (state: State): State => {
	return state;
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): DispatchProps => {
	return {
		/**
		 * renderSideNav - render side nav on side nav click, in order to change active tag of navigation-item
		 * when navigating from one route to another, if in any case, there isn't any action dispatch
		 * (in case if we have data in store, and we don't call API)
		 * then, store won't change, and sidenNav won't get rerendered
		 * we it's necessary to rerender sidenav, on route change, in order to update active route link
		 * renderSideNav is used to dispatch NO_ACTION, which will rerender this component
		  */
		renderSideNav: () => dispatch(createAction(actionTypes.NO_ACTION)),
		getProfile: () => dispatch(ProfileActions.getProfile())
	};
};

export default connect<State, DispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(withRouter(SideNav));
