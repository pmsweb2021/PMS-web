import React from 'react';
import Button from '../form/button';

interface Props {
	tabs: string[];
	disabled?: string[];
	activeTab: string;
	handleTabChange: (tab: string) => void;
}

/**
 * Tabs component, to show tabs
 * @param tabs - tabs to show
 * @param activeTab - active tab
 * @param handleTabChange - function to handle tab change
 */
const Tabs: React.FC<Props> = props => {
	return (
		<div className='custom-tabs'>
			{props.tabs.map(tab => {
				const onClick = () => (props.activeTab !== tab) && props.handleTabChange(tab);
				return (
					<Button
						disabled={(props.disabled || []).includes(tab)}
						onClick={onClick}
						className={props.activeTab === tab ? 'btn-active' : ''}
						key={tab}
					>
						{tab}
					</Button>
				);
			})}
		</div>
	);
};

export default Tabs;
