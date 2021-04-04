import { lazy } from 'react';
import { withRouter } from 'react-router';

const CoustomerDetail = withRouter(lazy(() => import('features/coustomerDetail/container/coustomerDetail')));

export {
	CoustomerDetail,
};
