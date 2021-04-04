import CryptoJS from 'crypto-js';
import { LoginResponse, UserProfileResponse } from 'features/login/interface/login.interface';
const KEY: string = 'adsfghjkla2312safaaszAS';

/**
 * function to check if user is logged in or not
 */
const checkLogin = (): boolean => {
	if (localStorage.authData) {
		return true;
	} else {
		return false;
	}
};

/**
 * function to get user access token
 */
const getAccessToken = (): boolean | string => {
	try {
		const data = localStorage.authData;
		if (data) {
			const bytes = CryptoJS.AES.decrypt(data.toString(), KEY);
			const decryptedData: LoginResponse = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
			return decryptedData && decryptedData.token ? decryptedData.token : false;
		} else {
			return false;
		}
	} catch (e) {
		return false;
	}
};

/**
 * function to get user data
 */
const getUserData = (): UserProfileResponse => {
	const data = localStorage.userData;
	if (data) {
		const bytes = CryptoJS.AES.decrypt(data.toString(), KEY);
		const decryptedData: UserProfileResponse = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
		if (!decryptedData) {
			return {} as UserProfileResponse;
		}
		return decryptedData;
	} else {
		return {} as UserProfileResponse;
	}
};

/**
 * function to get user language
 */
const getUserLanguage = (): string => {
	const data = localStorage.userData;
	// return german as default, if user is not logged in
	if (!data) {
		return 'de';
	}
	const bytes = CryptoJS.AES.decrypt(data.toString(), KEY);
	const decryptedData: UserProfileResponse = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
	// return german as default, if user data not found
	if (!decryptedData) {
		return 'de';
	}
	return (decryptedData.user || {}).language || 'de';
};

/**
 * function to get user language
 */
const setUserLanguage = (language: string): void => {
	const data = localStorage.userData;
	if (!data) {
		return;
	}
	const bytes = CryptoJS.AES.decrypt(data.toString(), KEY);
	const decryptedData: UserProfileResponse = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
	if (!decryptedData) {
		return;
	}
	decryptedData.user.language = language;
	setUserData(decryptedData);
};

/**
 * function to set user authentication data
 */
const setAuthData = (data: LoginResponse): void => {
	const cipherText = CryptoJS.AES.encrypt(JSON.stringify(data), KEY);
	localStorage.setItem('authData', cipherText.toString());
};

/**
 * function to set user authentication data
 */
const setUserData = (data: UserProfileResponse): void => {
	const cipherText = CryptoJS.AES.encrypt(JSON.stringify(data), KEY);
	localStorage.setItem('userData', cipherText.toString());
};

/**
 * function to get user authentication data
 */
const getAuthData = (): LoginResponse | undefined => {
	const data = localStorage.authData;
	if (data) {
		const bytes = CryptoJS.AES.decrypt(data.toString(), KEY);
		const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
		return decryptedData;
	} else {
		return;
	}
};

/**
 * function to get super admin flag
 */
const checkSuperAdmin = (): boolean => {
	const data = localStorage.authData;
	if (data) {
		const bytes = CryptoJS.AES.decrypt(data.toString(), KEY);
		const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
		return (decryptedData as LoginResponse).isSuperAdmin;
	} else {
		return false;
	}
};

/**
 * function to remove user authentication data
 */
const removeAuthData = (): void => {
	localStorage.removeItem('authData');
};

const authService = {
	checkLogin: checkLogin,
	getAccessToken: getAccessToken,
	getUserData: getUserData,
	setAuthData: setAuthData,
	getAuthData: getAuthData,
	removeAuthData: removeAuthData,
	setUserData: setUserData,
	getUserLanguage: getUserLanguage,
	setUserLanguage: setUserLanguage,
	checkSuperAdmin: checkSuperAdmin
};

export default authService;
