import React from 'react';
import './spinner.css';

const Loader: React.FC<{ className?: string }> = (props) => {
	return (
		<div className={[props.className || '', 'spinner-wrapper'].join(' ')}>
			<div className='loading-icon fa fa-spin fa-spinner' />
		</div>
	);
}

const Spinner: React.FC<{}> = () => {
	return (
		<div className='spinner' data-testid='spinner'>
			<div className='lds-facebook'>
				<div />
				<div />
				<div />
			</div>
		</div>
	);
}

export default Spinner;
export {
	Loader
}
