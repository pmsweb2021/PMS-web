import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { State, Action } from 'shared/interface';
import { createLoadingSelector } from 'shared/util/utility';

import * as PasswordActions from '../store/password.action';
import { MapStateProps, DispatchProps, ForgetPasswordParams } from '../interface/password.interface';
import ForgetPasswordForm from '../component/forgetPasswordForm';

const loadingSelector = createLoadingSelector(['FORGET_PASSWORD']);
const mapStateToProps = (state: State): MapStateProps => {
	return {
		...state.auth,
		loading: loadingSelector(state)
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): DispatchProps => {
	return {
		forgetPassword: (payload: ForgetPasswordParams) => dispatch(PasswordActions.forgetPassword(payload)),
	};
}

export default connect<MapStateProps, DispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(ForgetPasswordForm);
