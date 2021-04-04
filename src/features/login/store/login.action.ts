import { ThunkDispatch } from 'redux-thunk';

import * as actionTypes from 'store/action-types';
import AuthService from 'shared/services/auth.service';
import HttpService from 'shared/services/http.service';
import { API_CONFIG } from 'shared/constants/constants';
import { createAction } from 'shared/util/utility';
import { Action } from 'shared/interface';
import { LoginResponse, UserLoginData, UserProfileResponse, ChangePasswordParams, UpdateProfileParams } from '../interface/login.interface';

const login = (data: UserLoginData) => {
	return (dispatch: ThunkDispatch<{}, {}, Action>) => {
		dispatch(createAction(actionTypes.AUTH_INIT));
		HttpService.post(API_CONFIG.path.login, data, {}, {
			isAccessTokenRequire: false
		}).then((response: LoginResponse) => {
			AuthService.setAuthData(response);
			dispatch(createAction(actionTypes.AUTH_SUCCESS, response));
		}).catch(() => {
			dispatch(createAction(actionTypes.AUTH_FAIL));
		});
	};
};

const getProfile = () => {
	return (dispatch: ThunkDispatch<{}, {}, Action>) => {
		dispatch(createAction(actionTypes.GET_PROFILE_INIT));
		HttpService.get(API_CONFIG.path.profile).then((profileResponse: UserProfileResponse) => {
			AuthService.setUserData(profileResponse);
			dispatch(createAction(actionTypes.GET_PROFILE_SUCCESS, profileResponse));
		}).catch(() => {
			dispatch(createAction(actionTypes.GET_PROFILE_FAIL));
		});
	};
};

const changePassword = (passwords: ChangePasswordParams) => {
	return (dispatch: ThunkDispatch<{}, {}, Action>) => {
		dispatch(createAction(actionTypes.CHANGE_PASSWORD_INIT));
		HttpService.post(API_CONFIG.path.changePassword, passwords).then(() => {
			dispatch(createAction(actionTypes.CHANGE_PASSWORD_SUCCESS));
			dispatch(createAction('RESET_MODAL'));
		}).catch(() => {
			dispatch(createAction(actionTypes.CHANGE_PASSWORD_FAIL));
		});
	};
};

const logout = () => {
	return (dispatch: ThunkDispatch<{}, {}, Action>) => {
		dispatch(createAction(actionTypes.AUTH_LOGOUT_SUCCESS));
		// HttpService.get(API_CONFIG.path.logout).then(() => {
		// }).catch(() => {
		// 	dispatch(createAction(actionTypes.AUTH_LOGOUT_FAIL));
		// });
	};
};

const updateProfile = (profile: UpdateProfileParams) => {
	return (dispatch: ThunkDispatch<{}, {}, Action>) => {
		dispatch(createAction(actionTypes.UPDATE_PROFILE_INIT));
		HttpService.put(API_CONFIG.path.profile, profile).then(() => {
			dispatch(createAction(actionTypes.UPDATE_PROFILE_SUCCESS, profile));
			dispatch(createAction('RESET_MODAL'));
		}).catch(() => {
			dispatch(createAction(actionTypes.UPDATE_PROFILE_FAIL));
		});
	};
};

export {
	login,
	logout,
	getProfile,
	changePassword,
	updateProfile
};

