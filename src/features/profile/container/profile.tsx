import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { FormikValues } from 'formik';

import Button from 'shared/components/form/button';
import { AuthState, LoaderState, State, Action } from 'shared/interface';
import { createLoadingSelector } from 'shared/util/utility';
import Header from 'shared/components/header/header';
import { firstLevelBreadcrumbs } from 'shared/constants/constants';
import * as ProfileActions from 'features/login/store/login.action';
import { ChangePasswordParams, UpdateProfileParams } from 'features/login/interface/login.interface';

import Profile from '../component/profile';
import ChangePassword from '../component/changePassword';
import UpdateProfile from '../component/updateProfile';
interface DispatchProps {
	getProfile: () => void;
	changePassword: (data: ChangePasswordParams) => void;
	updateProfile: (data: UpdateProfileParams) => void;
}
interface MapStateProps extends AuthState, LoaderState {
	modalLoading: boolean;
}
interface ProfileState {
	isOpen: boolean;
	type: string;
}
interface OwnProps extends DispatchProps, MapStateProps { }
class ProfileComponent extends React.Component<OwnProps> {
	state: ProfileState = { isOpen: false, type: '' };
	static getDerivedStateFromProps = (props: OwnProps) => {
		if (props.closeModal) {
			return { isOpen: false, type: '' };
		}
		return null;
	}
	componentDidMount = () => this.props.getProfile();
	render = () => (
		<>
			<Header
				data={firstLevelBreadcrumbs}
				title={'Profile'}>
				<div className='breadcrumb-btn'>
					<Button onClick={this.handleChangePassword} className='mr-2' btnType='primary'>
						Change Password
					</Button>
				</div>
			</Header>
			<Profile
				handleUpdateProfile={this.handleUpdateProfile}
				loading={this.props.loading}
				userData={this.props.userData} />

			{this.state.type === 'changePassword' &&
				<ChangePassword
					show={this.state.isOpen}
					loading={this.props.modalLoading}
					handleConfirm={this.onConfirmPassword}
					handleClose={this.toggleModalStatus} />}

			{this.state.type === 'updateProfile' &&
				<UpdateProfile
					initialValues={{
						name: this.props.userData.user.name,
						email: this.props.userData.user.email
					}}
					show={this.state.isOpen}
					loading={this.props.modalLoading}
					handleConfirm={this.onUpdateProfile}
					handleClose={this.toggleModalStatus} />}
		</>
	);
	onConfirmPassword = (values: FormikValues) => this.props.changePassword(values as ChangePasswordParams);
	onUpdateProfile = (values: FormikValues) => this.props.updateProfile(values as UpdateProfileParams);
	toggleModalStatus = () => this.setState({ isOpen: !this.state.isOpen });
	handleChangePassword = () => this.setState({ isOpen: !this.state.isOpen, type: 'changePassword' });
	handleUpdateProfile = () => this.setState({ isOpen: !this.state.isOpen, type: 'updateProfile' });
}

const loadingSelector = createLoadingSelector(['GET_PROFILE']);
const modalLoadingSelector = createLoadingSelector(['CHANGE_PASSWORD', 'UPDATE_PROFILE']);
const mapStateToProps = (state: State): MapStateProps => {
	return {
		...state.auth,
		loading: loadingSelector(state),
		modalLoading: modalLoadingSelector(state)
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): DispatchProps => {
	return {
		getProfile: () => dispatch(ProfileActions.getProfile()),
		changePassword: (data: ChangePasswordParams) => dispatch(ProfileActions.changePassword(data)),
		updateProfile: (data: UpdateProfileParams) => dispatch(ProfileActions.updateProfile(data)),
	};
}

export default connect<MapStateProps, DispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(ProfileComponent);
