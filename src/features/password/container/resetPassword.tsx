import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { State, Action } from 'shared/interface';
import { createLoadingSelector } from 'shared/util/utility';

import * as PasswordActions from '../store/password.action';
import { ResetPasswordDispatchProps, ResetPasswordParams, MapStateProps } from '../interface/password.interface';
import ResetPasswordForm from '../component/resetPasswordForm';

const loadingSelector = createLoadingSelector(['RESET_PASSWORD']);
const mapStateToProps = (state: State): MapStateProps => {
	return {
		...state.auth,
		loading: loadingSelector(state)
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): ResetPasswordDispatchProps => {
	return {
		resetPassword: (payload: ResetPasswordParams, token: string) => dispatch(PasswordActions.resetPassword(payload, token)),
	};
}

export default connect<MapStateProps, ResetPasswordDispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
