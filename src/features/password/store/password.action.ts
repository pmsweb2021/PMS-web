import { ThunkDispatch } from 'redux-thunk';
import * as actionTypes from 'store/action-types';
import HttpService from 'shared/services/http.service';
import { API_CONFIG } from 'shared/constants/constants';
import { createAction } from 'shared/util/utility';
import { Action } from 'shared/interface';
import { ForgetPasswordParams, ResetPasswordParams } from '../interface/password.interface';



const forgetPassword = (data: ForgetPasswordParams) => {
	return (dispatch: ThunkDispatch<{}, {}, Action>) => {
		dispatch(createAction(actionTypes.FORGET_PASSWORD_INIT));
		HttpService.post(API_CONFIG.path.forgetPassword, data).then(() => {
			dispatch(createAction(actionTypes.FORGET_PASSWORD_SUCCESS));
		}).catch((err: Error) => {
			dispatch(createAction(actionTypes.FORGET_PASSWORD_FAIL));
		});
	};
}

const resetPassword = (data: ResetPasswordParams, token: string) => {
	return (dispatch: ThunkDispatch<{}, {}, Action>) => {
		dispatch(createAction(actionTypes.RESET_PASSWORD_INIT));
		data.token = token;
		HttpService.post(`${API_CONFIG.path.resetPassword}/${token}`, data).then(() => {
			dispatch(createAction(actionTypes.RESET_PASSWORD_SUCCESS));
			dispatch(createAction('RESET_MODAL'));
		}).catch((err: Error) => {
			dispatch(createAction(actionTypes.RESET_PASSWORD_FAIL));
		});
	};
}


export {
	forgetPassword,
	resetPassword
}

