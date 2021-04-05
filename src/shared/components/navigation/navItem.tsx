import React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { SideBarMenu } from 'features/login/interface/login.interface';

interface Props extends RouteComponentProps {
	renderSideNav: () => void;
	menu: SideBarMenu;
	isOpen: boolean;
	toggleIsOpen: (name: string) => void;
}

const getPathElements = (path: string) => {
	return path.split('/').filter(str => str !== '');
};

const getActiveClass = (currentPathStr: string, actualPathStr: string): string => {
	// for base path, it's compulsary to have both path as `/`, in order to show `active` status
	if (actualPathStr === '/') {
		if (currentPathStr === actualPathStr) {
			return 'active';
		}
		return '';
	}
	const actualPath = getPathElements(actualPathStr);
	const currentPath = getPathElements(currentPathStr);
	// if the first level path matches for actual path, and current path, return `active`
	if (actualPath[0] === currentPath[0]) {
		return 'active';
	}
	return '';
};

const icons: { [key: string]: string } = {
	users: 'users',
	building: 'building',
	document: 'file-text',
};

const NavItem: React.FC<Props> = props => {
	const handleNavClick = () => {
		props.renderSideNav();
		props.toggleIsOpen(props.menu.name);
	};
	return (
		<li
			className={getActiveClass(props.location.pathname, props.menu.route)}
			onClick={handleNavClick}
		>
			{/* eslint-disable-next-line */}
			<Link to={props.menu.route}>
				<i className={`fa fa-${icons[props.menu.icon]}`} />
				<span className='nav-label'>
					{props.menu.name}
				</span>
			</Link>
		</li>
	);
};

export default withRouter(NavItem);
