import moment from 'moment';
import findIndex from 'lodash/findIndex';

import { Action, State } from '../interface';

export const getEventId = (id: string) => {
	return id.split('_')[1].split('::')[0];
};

export const getChannelId = (id: string) => {
	return id.split('_')[0];
};

export const createAction = (ACTION: string, data: any = null): Action => {
	return {
		type: ACTION,
		payload: data
	};
};

export const createLoadingSelector = (actions: string[]) => (state: State) => {
	// returns true only when all actions is not loading
	let loader = false;
	for (let i = 0; i < actions.length; i += 1) {
		if (state.loading.api[actions[i]]) {
			loader = true;
			break;
		}
	}
	return loader;
};

/**
 * function which returns formatted date
 * @param date
 */
export const formatDate = (date: any, format?: string) => {
	if (!date) {
		return '';
	}
	return moment(date).local().format(format || 'YYYY-MM-DD HH:mm:ss');
};

export const debounce = (func: any, wait = 400) => {
	let h: NodeJS.Timeout;
	return (...args: any) => {
		clearTimeout(h);
		h = setTimeout(() => func(...args), wait);
	};
};

export const setFileInputValue = (event: React.ChangeEvent<HTMLInputElement>,
	callBack: (name: string, value: any) => void, key: string, values: any[], types: string[]) => {
	const files = event.target.files;
	if (!files || !files[0]) { return; }
	const fileList = Array.from(files);
	let data: any[] = values;
	if (!data) { data = []; }
	if (fileList.length > 0 && fileList.length <= 8) {
		for (const file of fileList) {
			const validateFileIndex = types ? findIndex(types, type => file.type.startsWith(type)) : -1;
			if (validateFileIndex >= 0) {
				data.push({
					file: file,
					url: window.URL.createObjectURL(file),
					type: file.type.startsWith('image') ? 'image' : 'video'
				});
			}
		}
	}
	callBack(key, data);
};
