import React from 'react';
import './emptyDataContainer.css';

interface EmptyDataContainerProps {
	text?: string
}

const EmptyDataContainer: React.FC<EmptyDataContainerProps> = (props) => {
	return (
		<div className='empty-data-wrapper'>
			{props.text || 'No data found'}
		</div>
	)
}

export default EmptyDataContainer;
