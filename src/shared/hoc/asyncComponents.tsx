import { lazy } from 'react';
import { withRouter } from 'react-router';

const CustomerDetail = withRouter(lazy(() => import('features/customerDetail/container/customerDetail')));
const CompanyDetail = withRouter(lazy(() => import('features/companyDetail/container/companyDetail')));
const PolicyDetail = withRouter(lazy(() => import('features/policyDetail/container/policyDetail')));

export {
	CustomerDetail,
	CompanyDetail,
	PolicyDetail
};