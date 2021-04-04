import { combineReducers } from 'redux';
import login from 'features/login/store/login.reducer';
import loadingReducer from './loadingReducer';
import { State, Action } from 'shared/interface';

import * as actionTypes from 'store/action-types';

const appReducer = combineReducers({
	auth: login,
	loading: loadingReducer
});

const rootReducer = (state: State | undefined, action: Action): State => {
	if (action.type === actionTypes.AUTH_LOGOUT_SUCCESS || action.type === actionTypes.AUTH_LOGOUT_FAIL) {
		localStorage.removeItem('authData');
		localStorage.removeItem('userData');
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;
