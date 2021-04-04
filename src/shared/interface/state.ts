import { UserProfileResponse } from 'features/login/interface/login.interface';

export interface AuthState {
	authData: {
		auth: boolean;
	};
	userData: UserProfileResponse;
	closeModal: boolean;
}


export interface LoadingState {
	api: {
		[key: string]: boolean;
	}
}

export interface NotificationMsgState {
	message: string;
	type: string;
}

export interface LoaderState {
	loading: boolean;
}

export interface Pagination {
	current_page: number;
	from: number;
	last_page: number;
	per_page: number;
	to: number;
	total: number;
}

export interface SortingConfig {
	orderByColumn: string;
	orderBy: 'asc' | 'desc';
};

export interface TableColumn {
	key?: string;
	sortable: boolean;
	searchable: boolean;
	heading: string;
}

export interface State {
	auth: AuthState;
	loading: LoadingState;
}

export interface Action {
	type: string;
	payload: any;
}


