import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';
import { QueryParameters } from '../interface';
import { getChannelId, getEventId } from 'shared/util/utility';

const firstLevelBreadcrumbs = [
	{ name: 'Home', link: '/' }
];

const channelId = 71588578;
const eventId = 3;

const API_CONFIG = {
	baseUrl: `${process.env.REACT_APP_BASE_URL}`,
	path: {
		login: 'auth/login',
		userList: 'auth/getAllAdmins',
		addUser: 'auth/createAdminUser',
		deleteUser: 'auth/deleteAdminUser',
		logout: 'logout',
		forgetPassword: 'auth/forgot-password',
		resetPassword: 'auth/password/reset',
		profile: 'profile',
		changePassword: 'change-password',
		users: 'users',
		awsCreds: 'auth/contentUploadCreds',
		getAllPayPalConfig: 'payment/getAllPaypalConfig',
		mediaList: (id: string) =>
			`media/:channelId/events/:eventId/list-media`.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
		addMedia: (id: string) =>
			`media/:channelId/events/:eventId/upload-media`.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
		deleteMedia: (id: string) =>
			`media/:channelId/events/:eventId/delete-media`.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
		pollList: (id: string) =>
			`polls/:channelId/events/:eventId/fetch-polls`.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
		addPoll: (id: string) =>
			`polls/:channelId/events/:eventId/add-polls`.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
		deletePoll: (id: string) =>
			`polls/:channelId/events/:eventId/remove-polls`.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
		getStar: (id: string) =>
			`stars/:channelId/events/:eventId/get-stars`.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
		setStar: (id: string) =>
			`stars/:channelId/events/:eventId/set-stars`.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
		setPaypalConfigOfEvent: (id: string) =>
			`payment/:channelId/events/:eventId/setPaypalConfigOfEvent`.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
		events: `show/shows`,
		event: (id: string) => `show/:channelId/events/:eventId`.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
		participant: (id: string) => `participants/:channelId/events/:eventId/fetch-participants`
			.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
		fetchPolls: (id: string) => `polls/:channelId/events/:eventId/fetch-polls`.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
		participantQuestion: (id: string) => `polls/:channelId/events/:eventId/add/participant`
			.replace(':channelId', getChannelId(id)).replace(':eventId', getEventId(id)),
	}
};

const getUrl = (url: string, params: QueryParameters = {}): string => {
	let urlString = `${API_CONFIG.baseUrl}/${url}`;
	if (params && !isEmpty(params)) {
		urlString += `?${queryString.stringify(params)}`;
	}
	return urlString;
};

const pageOptions: number[] = [15, 30, 50, 100];

const PER_PAGE: number = 15;
const ENVIRONMENT = process.env.ENVIRONMENT === 'production' ? 'production' : 'staging';

export {
	API_CONFIG,
	getUrl,
	firstLevelBreadcrumbs,
	pageOptions,
	PER_PAGE,
	ENVIRONMENT,
	channelId,
	eventId
};
