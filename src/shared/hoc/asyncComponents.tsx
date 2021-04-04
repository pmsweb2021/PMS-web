import { lazy } from 'react';
import { withRouter } from 'react-router';

const MediaList = withRouter(lazy(() => import('features/media/container/mediaList')));
const MediaForm = withRouter(lazy(() => import('features/media/container/mediaForm')));

const PollList = withRouter(lazy(() => import('features/poll/container/pollList')));
const PollForm = withRouter(lazy(() => import('features/poll/container/pollForm')));

const StarChallenge = withRouter(lazy(() => import('features/starChallenge/container/starChallenge')));

const Users = withRouter(lazy(() => import('features/users/container/users')));

const Events = withRouter(lazy(() => import('features/event/container/event')));
const CoustomerDetail = withRouter(lazy(() => import('features/coustomerDetail/container/coustomerDetail')));
const EventDetail = withRouter(lazy(() => import('features/event/container/eventDetail')));
// const EventStage = withRouter(lazy(() => import('features/event/container/eventStage')));

const Payment = withRouter(lazy(() => import('features/payment/container/payment')));

export {
	CoustomerDetail,
	PollList,
	PollForm,
	MediaList,
	MediaForm,
	StarChallenge,
	Users,
	Payment,
	Events,
	EventDetail,
	// EventStage
};
