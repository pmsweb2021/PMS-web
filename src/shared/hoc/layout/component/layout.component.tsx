import React from 'react';
import Sidebar from 'shared/components/navigation/sidenav';
import TopHeader from 'shared/components/navigation/topHeader';
// import Footer from 'shared/components/footer/footer';

const Layout: React.FC = (props) => {
	return (
		<div id='wrapper'>
			<Sidebar />
			<div id='page-wrapper' className='gray-bg'>
				<TopHeader />
				{props.children}
			</div>
			{/* <Footer /> */}
		</div>
	)
}

export default Layout;
