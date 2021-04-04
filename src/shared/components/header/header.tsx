import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Button from '../form/button';
import Breadcrumbs from './breadcrumbs';

interface Props {
	title: string;
	text?: string;
	linkText?: { name: string; link: string };
	data: { name: string; link: string; }[];
	provideBackBtn?: boolean;
}

const Header: React.FC<Props & RouteComponentProps> = props => (
	<div>
		<div className='row wrapper border-bottom white-bg page-heading'>
			<Breadcrumbs {...props} />
			<div className='col-lg-6 col-md-6 col-sm-6'>
				{props.provideBackBtn &&
					<div className='breadcrumb-btn'>
						<Button className='back-btn width-100px' onClick={props.history.goBack} btnType='info'>
							Back
						</Button>
					</div>}
				{props.children}
			</div>
		</div>
	</div>
);

export default withRouter(Header);
