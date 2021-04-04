import React from 'react';
// import { Translate } from '../translate';

/**
 * common field error message component
 * @param props
 */
const FieldErrorMessage: React.FC<any> = (props) => (
	<p className='error'>
		{/* <Translate text={props.children} /> */}
		{props.children}
	</p>
);

export default FieldErrorMessage;
