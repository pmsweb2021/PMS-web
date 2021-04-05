import { lazy } from 'react';
import { withRouter } from 'react-router';

const CustomerDetail = withRouter(lazy(() => import('features/customerDetail/container/customerDetail')));

export {
	CustomerDetail,
};
