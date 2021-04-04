import * as actionTypes from 'store/action-types';
import { AuthState, Action } from 'shared/interface';
import AuthService from 'shared/services/auth.service';

const initialState: AuthState = {
	authData: {
		auth: AuthService.checkLogin()
	},
	userData: AuthService.getUserData(),
	closeModal: false
};


const reducer = (state: AuthState = initialState, action: Action): AuthState => {
	switch (action.type) {
		case actionTypes.AUTH_SUCCESS:
			return {
				...state,
				authData: {
					auth: true
				},
				userData: action.payload
			};
		case actionTypes.NO_ACTION:
			return { ...state };
		case actionTypes.AUTH_LOGOUT_SUCCESS:
			return {
				...state,
				authData: {
					auth: false
				}
			};
		case actionTypes.GET_PROFILE_SUCCESS:
			return {
				...state,
				userData: action.payload
			};
		case actionTypes.CHANGE_PASSWORD_SUCCESS:
			return {
				...state,
				closeModal: true
			};
		case actionTypes.RESET_PASSWORD_SUCCESS:
			return {
				...state,
				closeModal: true
			};
		case actionTypes.UPDATE_PROFILE_SUCCESS:
			return {
				...state,
				userData: {
					...state.userData,
					user: {
						...state.userData.user,
						name: action.payload.name,
						email: action.payload.email,
						language: action.payload.language,
					}
				},
				closeModal: true
			};
		case 'RESET_MODAL':
			return {
				...state,
				closeModal: false
			};
		default:
			return state;
	}
};
export default reducer;
