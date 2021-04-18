import { lazy } from 'react';
import { withRouter } from 'react-router';

const CustomerDetail = withRouter(lazy(() => import('features/customerDetail/container/customerDetail')));
const CompanyDetail = withRouter(lazy(() => import('features/companyDetail/container/companyDetail')));
const Quotation = withRouter(lazy(() => import('features/quotation/container/quotation')));

export {
	CustomerDetail,
	CompanyDetail,
	Quotation
};