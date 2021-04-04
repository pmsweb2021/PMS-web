import { AuthState, LoaderState } from 'shared/interface';

export interface UserLoginData {
	userId: string;
	password: string;
}

export interface DispatchProps {
	onLogin: (payload: UserLoginData) => void;
}

export interface MapStateProps extends AuthState, LoaderState { }

export interface CustomLoginProps {
	submit: (payload: UserLoginData) => void;
}

export interface LoginResponse {
	token: string;
	isSuperAdmin: boolean;
	ofEvent?: string;
}

export interface SideBarMenu {
	name: string;
	route: string;
	icon: string;
}

export interface UserProfileResponse {
	user: {
		email: string;
		name: string;
		permissions: {
			[key: string]: boolean;
		};
		roles: string[];
		status: number;
		language: string;
	};
	sidebarMenu: SideBarMenu[];
}

export interface ChangePasswordParams {
	old_password: string;
	new_password: string;
	new_password_confirmation: string;
}

export interface UpdateProfileParams {
	name: string;
	email: string;
	language: string;
}
