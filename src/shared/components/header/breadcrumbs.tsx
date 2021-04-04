import React from 'react';
import { Link } from 'react-router-dom';

interface BreadCrumbsProps {
	title: string;
	text?: string;
	linkText?: { name: string; link: string };
	data: { name: string; link: string; }[]
}

const Breadcrumbs: React.FC<BreadCrumbsProps> = (props) => (
	<div className='col-lg-6 col-md-6 col-sm-6'>
		<h2 className='text-capitalize' data-testid="breadcrumb-title">
			{props.title}
		</h2>
		<ol className='breadcrumb text-capitalize'>
			{
				props.data.map(obj => (
					<li key={obj.name}>
						<Link to={obj.link}>
							{obj.name}
						</Link>
					</li>
				))
			}
			<li className='active'>
				<strong>
					{props.text || props.title}
				</strong>
			</li>
			&nbsp;
			{props.linkText && props.linkText.name &&
				<a href={props.linkText.link} target="blank">({props.linkText.name})</a>
			}
		</ol>
	</div>
)

export default Breadcrumbs;
