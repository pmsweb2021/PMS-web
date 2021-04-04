import { AuthState, LoaderState } from 'shared/interface';

export interface ForgetPasswordParams {
	email: string;
}

export interface ResetPasswordParams {
	email: string;
	password: string;
	password_confirmation: string;
	token?: string;
}

export interface DispatchProps {
	forgetPassword: (payload: ForgetPasswordParams) => void;
}

export interface MapStateProps extends AuthState, LoaderState { }

export interface ResetPasswordDispatchProps {
	resetPassword: (payload: ResetPasswordParams, token: string) => void;
}

